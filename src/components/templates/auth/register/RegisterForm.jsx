import { Formik, Form } from 'formik'
import { useMessageStore } from '../../../../store/slices/useMessageStore'
import useRegisterFormData from '../register/useRegisterFormData.js'
import postService from '../../../../services/post_services/postService'
import { RegisterFormMap } from '../register/RegisterFormMap.jsx'
import { useState } from 'react'
import { backendErrorMessageProcessor } from '../../../molecules/messageManager/backendErrorMessageProcessor'
import { PATHS } from '../../../../store/models/routes.js'
import { useSetOpenEmailModalInfo } from '../common/setOpenEmailModalInfo.js'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const { addMessage } = useMessageStore()
    const { initialValues, registerSchema, formFields } = useRegisterFormData()
    const { setOpenEmailModalInfo } = useSetOpenEmailModalInfo()
    const [submitingForm, setSubmitingForm] = useState(false)
    const navigate = useNavigate()

    const modalData = {
        title: 'Te has registrado exitosamente!',
        body: 'Por favor abre tu email y completa la verificaion para completar el registro'
    }

    const handleSubmitForm = async(values, { resetForm }) => {
        setSubmitingForm(true)
        const response = await postService('/auth/register', values)
        setSubmitingForm(false)
        console.log('response de register', response)
        // todo: mandar email desde el back para confirmar cuenta y reedireccionar a login
        if (!response.success) {
            const errors = backendErrorMessageProcessor(response.errors)
            addMessage({ type: 'error', content: errors })
            return
        }
        navigate(PATHS.AUTH.LOGIN)
        setOpenEmailModalInfo(response.data.email, modalData)
        resetForm()
    }

    return (
        <div className='template'>
            <Formik initialValues = { initialValues } validationSchema = { registerSchema } onSubmit={handleSubmitForm}>
                {({ errors, touched }) => (
                    <Form className='form'>
                        <RegisterFormMap formFields={formFields} errors={errors} touched={touched} />
                        <div className='form-button'>
                            <button type="submit" disabled={submitingForm}>
                                Registrarme
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div style={{ marginTop: '20px' }}>
                <a style={{ textDecoration: 'none' }} href={PATHS.AUTH.LOGIN}>¿Ya estás registrado? Inicia sesión.</a>
            </div>
        </div>
    )
}

export default RegisterForm