import { apiInstance } from '../api_instance/apiInstance'

const postService = async(url, values) => {
    try {
        console.log('en try')
        const jsonValues = JSON.stringify(values)
        const response = await apiInstance.post(url, jsonValues, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log('paso la response')
        if (response.status >= 200 && response.status < 300) {
            const data = response.data ? response.data : null
            return ({ success: true, data })
        } else {
            const errors = response?.data?.errors ? response.data.errors : []
            return ({ success: false, errors })
        }
    } catch (error) {
        console.log('en catch')
        console.log(error)
        const errors = error?.response?.data?.errors ? error.response.data.errors : []
        return ({ success: false, errors })
    }
}

export default postService