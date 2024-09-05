import * as Yup from 'yup'

const useAddTaskFormData = () => {
    const initialValues = {
        title: '',
        description: '',
        image: ''
    }

    const registerSchema = Yup.object().shape(
        {
            title: Yup.string()
                .min(2, 'Titulo muy corto')
                .max(50, 'Titulo muy largo')
                .required('El titulo es obligatorio'),
            description: Yup.string()
                .min(5, 'Descripcion muy corta')
                .max(1000, 'Descripcion muy larga')
                .required('La descripcion es obligatoria'),
            image: Yup
                .string()
        })

    const formFields = [
        { id: 'title', type: 'text', label: 'Titulo', placeholder: 'Escriba el titulo aquí...' },
        { id: 'description', type: 'text', label: 'Descripcion', placeholder: 'Su descripcion aquí...' },
        { id: 'image', type: 'hidden', label: 'Imagen', placeholder: '' }
    ]

    return { initialValues, registerSchema, formFields }
}

export default useAddTaskFormData