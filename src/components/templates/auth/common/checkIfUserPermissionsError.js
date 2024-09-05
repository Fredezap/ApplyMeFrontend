export function checkIfUserPermissionsError(errors) {
    const hasPermissionError = errors.some(element => {
        console.log('element:', element.msg)
        console.log('is ERROR_IN_USER_VERIFICATION:', element.msg === 'ERROR_IN_USER_VERIFICATION')

        return element.msg === 'PLEASE_LOGIN'
    })

    if (hasPermissionError) {
        return true
    }

    console.log('siguió')
    return false
}