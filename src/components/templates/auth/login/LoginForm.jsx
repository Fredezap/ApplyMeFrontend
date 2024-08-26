import { Formik, Form } from 'formik'
import { RegisterFormMap } from '../login/LoginFormMap.jsx'
import { useMessageStore } from '../../../../store/slices/useMessageStore'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../../store/models/routes'
import useLoginFormData from '../login/useLoginFormData.js'
import { backendErrorMessageProcessor } from '../../../molecules/messageManager/backendErrorMessageProcessor'
import patchService from '../../../../services/patch_services/patchService.js'
import { useUserStore } from '../../../../store/slices/useUserStore.js'

const LogInForm = () => {
    const { addMessage } = useMessageStore()
    const { initialValues, registerSchema, formFields } = useLoginFormData()
    const [submitingForm, setSubmitingForm] = useState(false)
    const navigate = useNavigate()
    const { setUser } = useUserStore()

    const handleSubmitForm = async(values) => {
        setSubmitingForm(true)
        const response = await patchService('/auth/login', values)
        setSubmitingForm(false)
        if (!response.success) {
            const errors = backendErrorMessageProcessor(response.errors)
            addMessage({ type: 'error', content: errors })
            setSubmitingForm(false)
            return
        }
        addMessage({ type: 'success', content: 'Has iniciado secion correctamente' })
        setUser(response.data.filteredUser)
        navigate(PATHS.HOME)
    }

    return (
        <div className='template'>
            <div>
                <Formik initialValues = { initialValues } validationSchema = { registerSchema } onSubmit={handleSubmitForm}>
                    {({ errors, touched }) => (
                        <Form className='form'>
                            <RegisterFormMap formFields={formFields} errors={errors} touched={touched} />
                            <div className='form-button'>
                                <Button type="submit" variant="primary" disabled={submitingForm}>
                                    Iniciar sesión
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div style={{ marginTop: '20px' }}>
                    <a style={{ textDecoration: 'none' }} href={PATHS.AUTH.REGISTER}>¿Aún no tienes una cuenta? Regístrate.</a>
                </div>
                <div className='forgot-password-box'>
                    <button onClick={() => navigate(PATHS.AUTH.FORGOT_PASSWORD)}>Olvide mi contraseña</button>
                </div>
            </div>
        </div>
    )
}
// todo: agregar un link para ir a register si no tiene cuenta
export default LogInForm