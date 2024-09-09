import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { initialValuesUser } from '../models/user'

export const useUserStore = create(
    persist(
        (set, get) => ({
            user: initialValuesUser,

            setUser: (user) => set(() => ({ user })),

            clearUser: () => set(() => ({ user: initialValuesUser })),

            updateUserEmail: (email) => set((state) => ({
                user: { ...state.user, email }
            })),

            updateUserUsername: (username) => set((state) => ({
                user: { ...state.user, username }
            })),

            isUserEmpty: () => {
                const state = get()
                return Object.values(state.user).some(value => !value)
            },

            isUserAdmin: () => {
                const state = get()
                return state.user.role === 'admin'
            },

            isUserEmployee: () => {
                const state = get()
                return state.user.role === 'employee'
            },

            isUserUser: () => {
                const state = get()
                return state.user.role === 'user'
            },

            getUserTasks: () => {
                const state = get()
                return state.user.Tasks
            },

            isUserTasksEmpty: () => {
                const state = get()
                return state.user.Tasks.length === 0
            },

            isUserTasksAppliedEmpty: () => {
                const state = get()
                return state.user.TaskApplieds.length === 0
            }

        }),

        {
            name: 'user-storage',
            storage: createJSONStorage(() => globalThis.localStorage)
        }
    )
)