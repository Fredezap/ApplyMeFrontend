import { apiInstance } from '../api_instance/apiInstance'

const postServiceForImg = async(url, values) => {
    try {
        console.log('VALUES EN IMAGEN POST: ', values)
        const formData = new FormData()

        for (const [key, value] of Object.entries(values)) {
            if (typeof value === 'object' && !(value instanceof File)) {
                formData.append(key, JSON.stringify(value))
            } else {
                formData.append(key, value)
            }
        }

        for (const pair of formData.entries()) {
            console.log(pair[0], pair[1])
        }

        const response = await apiInstance.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (response.status >= 200 && response.status < 300) {
            const data = response.data || null
            console.log('response', response)
            return ({ success: true, data })
        } else {
            const results = response.results ? response.results : null
            const errors = response?.data?.errors ? response.data.errors : []
            return { success: false, errors, results }
        }
    } catch (error) {
        const results = error?.response?.data?.results ? error.response.data.results : null
        const errors = error?.response?.data?.errors ? error.response.data.errors : []
        return { success: false, errors, results }
    }
}

export default postServiceForImg