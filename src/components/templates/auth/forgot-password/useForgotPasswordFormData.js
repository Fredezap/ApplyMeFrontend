import * as Yup from 'yup'

export const useForgotPasswordFormData = () => {
    const initialValues = {
        email: ''
    }

    const registerSchema = Yup.object().shape({
        email: Yup.string()
            .email('Formato email invalido')
            .required('Email es obligatorio')
    })

    const formFields = [
        { id: 'email', type: 'email', label: 'Correo electrónico', placeholder: 'Su correo electrónico aquí...' }
    ]

    return { initialValues, registerSchema, formFields }
}