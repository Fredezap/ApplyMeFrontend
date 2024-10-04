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

            getUserTasksNotApplied: () => {
                const state = get()
                return state.user.Tasks.filter(task => task.TaskApplieds.length === 0)
            },

            getUserTasksApplied: () => {
                const state = get()
                return state.user.Tasks.filter(task => task.TaskApplieds.length > 0)
            },

            isUserTasksEmpty: () => {
                const state = get()
                return state.user.Tasks.length === 0
            },

            isUserTasksAppliedEmpty: () => {
                const state = get()
                return state.user.TaskApplieds.length === 0
            },

            getEmployeeTasksAppliedInProgres: () => {
                const state = get()
                return state.user.TaskApplieds.filter(task => task.status === 'in-progres')
            },

            getEmployeeTasksAppliedCanceled: () => {
                const state = get()
                return state.user.TaskApplieds.filter(task => task.status === 'canceled')
            },

            getEmployeeTasksAppliedCompleted: () => {
                const state = get()
                return state.user.TaskApplieds.filter(task => task.status === 'completed')
            }

        }),

        {
            name: 'user-storage',
            storage: createJSONStorage(() => globalThis.localStorage)
        }
    )
)