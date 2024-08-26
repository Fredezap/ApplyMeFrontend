import { Formik } from 'formik'
import { useState } from 'react'
import { useForgotPasswordFormData } from './useForgotPasswordFormData.js'
import { backendErrorMessageProcessor } from '../../../molecules/messageManager/backendErrorMessageProcessor'
import { useMessageStore } from '../../../../store/slices/useMessageStore.js'
import postService from '../../../../services/post_services/postService.js'
import { setOpenEmailModalInfo } from '../common/setOpenEmailModalInfo.js'

const ForgotPasswordForm = () => {
    const [submitingForm, setSubmitingForm] = useState(false)
    const { initialValues, registerSchema, formFields } = useForgotPasswordFormData()
    const { addMessage } = useMessageStore()

    const modalData = {
        title: 'Hecho!',
        body: 'Por favor abre tu email y sigue las instrucciones para reestablecer tu contraseña'
    }

    const handleSubmitForm = async(values, { resetForm }) => {
        setSubmitingForm(true)
        const response = await postService('/auth/forgot-password', values)
        setSubmitingForm(false)
        if (!response.success) {
            const errors = backendErrorMessageProcessor(response.errors)
            addMessage({ type: 'error', content: errors })
            return
        }
        setOpenEmailModalInfo(values.email, modalData)
        resetForm()
    }

    return (
        <div className='template'>
            <div>
                <Formik initialValues = { initialValues } validationSchema = { registerSchema } onSubmit={handleSubmitForm}>
                    {({ errors, touched }) => (
                        <Form className='form'>
                            <ForgotPasswordFormMap formFields={formFields} errors={errors} touched={touched} />
                            <div className='form-button'>
                                <Button type="submit" variant="primary" disabled={submitingForm}>
                                Iniciar sesión
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className='forgot-password-box'>
                    <button onClick={'a'}>Restablecer mi contraseña</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordForm