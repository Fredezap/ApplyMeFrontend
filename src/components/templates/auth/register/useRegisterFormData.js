import * as Yup from 'yup'

const UseRegisterFormData = () => {
    const initialValues = {
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    }

    const registerSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(2, 'Nombre muy corto')
                .max(50, 'Nombre muy largo')
                .required('Nombre de usuario obligatorio'),
            surname: Yup.string()
                .min(2, 'Apellido muy corto')
                .max(50, 'Apellido muy largo')
                .required('Apellido es obligatorio'),
            email: Yup.string()
                .email('Formato email invalido')
                .required('Email es obligatorio'),
            phone: Yup.string()
                .matches(/^[0-9]+$/, 'Numero de telefono invalido. Solo se permiten numeros')
                .required('Numero de telefono obligatorio'),
            password: Yup.string()
                .required('Contraseña es obligatoria')
                .min(8, 'Contraseña debe tener al menos 8 caracteres')
                .max(50, 'Contraseña muy larga')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                    'Contraseña debe incluir al menos una mayuscula, una minuscula, un numero y un caracter especial'),
            confirmPassword: Yup.string()
                .required('Contraseña de confirmacion es obligatoria')
                .oneOf([Yup.ref('password'), null], 'Contraseña deben coicidir')
        }
    )

    const formFields = [
        { id: 'name', type: 'text', label: 'Nombre', placeholder: 'Su nombre de usuario aquí...' },
        { id: 'surname', type: 'text', label: 'Apellido', placeholder: 'Su apellido aquí...' },
        { id: 'email', type: 'email', label: 'Correo electrónico', placeholder: 'Su correo electrónico aquí...' },
        { id: 'phone', type: 'text', label: 'Telefono', placeholder: 'Su telefono aquí...' },
        { id: 'password', type: 'password', label: 'Contraseña', placeholder: 'Su contraseña aquí...' },
        { id: 'confirmPassword', type: 'password', label: 'Confirmar contraseña', placeholder: 'Confirme su contraseña aquí...' }
    ]

    return { initialValues, formFields }
}

export default UseRegisterFormData