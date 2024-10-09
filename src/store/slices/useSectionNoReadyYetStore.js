import { create } from 'zustand'

const useSectionNoReadyYetStore = create((set) => ({
    show: false,
    setShow: (newState) => () => set({ show: newState })
}))

export default useSectionNoReadyYetStore