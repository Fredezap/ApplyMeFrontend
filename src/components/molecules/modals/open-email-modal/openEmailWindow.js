function openEmailWindow(email, addMessage) {
    const emailDomains = {
        'gmail.com': 'https://mail.google.com/',
        'outlook.com': 'https://outlook.live.com/',
        'hotmail.com': 'https://outlook.live.com/',
        'yahoo.com': 'https://mail.yahoo.com/',
        'icloud.com': 'https://www.icloud.com/mail',
        'proton.me': 'https://mail.proton.me/',
        'zoho.com': 'https://www.zoho.com/mail/',
        'aol.com': 'https://mail.aol.com/'
    }

    const emailNotFounded = 'Servicio de correo no reconocido. Por favor abra su email manualmente.'

    if (!email) {
        addMessage({ type: 'error', content: emailNotFounded })
        return
    }

    const domain = email.split('@')[1]
    const url = emailDomains[domain]
    if (url) {
        window.open(url, '_blank')
    } else {
        addMessage({ type: 'error', content: emailNotFounded })
    }
}

export default openEmailWindow