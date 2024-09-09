import useOpenEmailModalStore from '../../../../store/slices/useOpenEmailModalStore'

export const useSetOpenEmailModalInfo = () => {
    const { setShowOpenEmailModal, setModalData, setEmail } = useOpenEmailModalStore()

    const setOpenEmailModalInfo = (email, modalData) => {
        setEmail(email)
        setShowOpenEmailModal(true)
        setModalData(modalData)
    }

    return { setOpenEmailModalInfo }
}