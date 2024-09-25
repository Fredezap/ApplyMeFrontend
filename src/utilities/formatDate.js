export const formatDate = (fechaISO) => {
    const fecha = new Date(fechaISO)

    const dia = String(fecha.getDate()).padStart(2, '0')
    const mes = String(fecha.getMonth() + 1).padStart(2, '0')
    const anio = fecha.getFullYear()

    const fechaFormateada = `${dia}/${mes}/${anio}`
    return fechaFormateada
}