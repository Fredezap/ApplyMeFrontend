import { create } from 'zustand'

const useOpenEmailModalStore = create((set) => ({
    showOpenEmailModal: false,
    setShowOpenEmailModal: (isOpen) => set({ showOpenEmailModal: isOpen }),
    modalData: null,
    setModalData: (data) => set({ modalData: data }),
    email: '',
    setEmail: (email) => set({ email })
}))

export default useOpenEmailModalStore