import { Formik, Form } from 'formik'
import { useMessageStore } from '../../../../store/slices/useMessageStore'
import { useEffect, useRef, useState } from 'react'
import { backendErrorMessageProcessor } from '../../../molecules/messageManager/backendErrorMessageProcessor'
import useAddTaskFormData from './useAddTaskFormData.js'
import { AddTaskFormMap } from './AddTaskFormMap.jsx'
import { useUserStore } from '../../../../store/slices/useUserStore.js'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../../store/models/routes.js'
import { checkIfUserPermissionsError } from '../../auth/common/checkIfUserPermissionsError.js'
import useTaskStore from '../../../../store/slices/useTaskStore.js'
import postServiceForImg from '../../../../services/post_services/postServiceForImg.js'
import Button from 'react-bootstrap/Button'

const AddTaskForm = () => {
    const { addMessage } = useMessageStore()
    const { isUserEmpty, user, clearUser, setUser } = useUserStore()
    const { task, clearTask, setTask } = useTaskStore()
    const { initialValues, registerSchema, formFields } = useAddTaskFormData()
    const [submitingForm, setSubmitingForm] = useState(false)
    const navigate = useNavigate()
    const [imagePreview, setImagePreview] = useState('')
    const fileInputRef = useRef(null)

    const handleSubmitForm = async(values, { resetForm, setFieldValue }) => {
        setTask(values)

        if (isUserEmpty()) {
            navigate(PATHS.AUTH.LOGIN)
            addMessage({ type: 'error', content: 'Please login' })
            return
        }

        setSubmitingForm(true)
        values.user = user
        const response = await postServiceForImg('/user/create-task', values)
        setSubmitingForm(false)
        if (!response.success) {
            const errors = backendErrorMessageProcessor(response.errors)
            addMessage({ type: 'error', content: errors })

            if (checkIfUserPermissionsError(response.errors)) {
                clearUser()
                navigate(PATHS.AUTH.LOGIN)
            }

            return
        }
        console.log('DATA: ', response.data)
        addMessage({ type: 'success', content: 'Has creado un posteo exitosamente' })
        setUser(response.data.user)
        clearTask()
        resetForm()
        setImagePreview('')
        setFieldValue('image', '')
        fileInputRef.current.value = ''
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={handleSubmitForm}
                enableReinitialize={true}
            >
                {({ errors, touched, setFieldValue, setValues }) => {
                    useEffect(() => {
                        if (task) {
                            setValues(task)
                        }
                    }, [task, setValues])

                    return (
                        <Form className='form'>
                            <AddTaskFormMap
                                formFields={formFields}
                                errors={errors}
                                touched={touched}
                                setFieldValue={setFieldValue}
                                imagePreview={imagePreview}
                                setImagePreview={setImagePreview}
                                fileInputRef={fileInputRef}
                            />
                            <div className='form-button'>
                                <Button type="submit" disabled={submitingForm}>
                                    Crear
                                </Button>
                                {Object.entries(errors).length > 0 && (<p className='mt-2 error-message'>Su formulario contiene errores</p>)}
                                {submitingForm && (<p className='mt-3 submitting-message'>Creando tarea, por favor espere...</p>)}
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default AddTaskForm