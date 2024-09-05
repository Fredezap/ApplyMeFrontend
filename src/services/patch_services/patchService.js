import { apiInstance } from '../api_instance/apiInstance'

const patchService = async(url, values) => {
    try {
        const jsonValues = JSON.stringify(values)
        const response = await apiInstance.patch(url, jsonValues, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log('response en patch service: ', response)
        if (response.status >= 200 && response.status < 300) {
            const data = response.data || null
            return ({ success: true, data })
        } else {
            const errors = response?.data?.errors ? response.data.errors : []
            return ({ success: false, errors })
        }
    } catch (error) {
        console.log('error en catch: ', error)
        const errors = error?.response?.data?.errors ? error.response.data.errors : []
        return ({ success: false, errors })
    }
}

export default patchService