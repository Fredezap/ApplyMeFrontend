import { create } from 'zustand'

const useTaskStore = create((set) => ({
    task: null,
    setTask: (task) => set({ task }),
    clearTask: () => set({ task: null })
}))

export default useTaskStore