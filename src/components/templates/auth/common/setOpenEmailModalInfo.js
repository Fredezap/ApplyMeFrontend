import useOpenEmailModalStore from '../../../../store/slices/useOpenEmailModalStore'

export const setOpenEmailModalInfo = (email, modalData) => {
    const { setShowOpenEmailModal, setModalData, setEmail } = useOpenEmailModalStore()
    setEmail(email)
    setShowOpenEmailModal(true)
    setModalData({
        modalData
    })
}