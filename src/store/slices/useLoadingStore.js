import { create } from 'zustand'

const useLoadingStore = create((set) => ({
    loading: false,
    setLoading: (isloading) => set({ showOpenEmailModal: isloading })
}))

export default useLoadingStore