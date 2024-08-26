import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { initialValuesUser } from '../models/user'

export const useUserStore = create(
    persist(
        (set, get) => ({
            user: initialValuesUser,

            setUser: (user) => set(() => ({ user })),

            updateUserEmail: (email) => set((state) => ({
                user: { ...state.user, email }
            })),

            updateUserUsername: (username) => set((state) => ({
                user: { ...state.user, username }
            })),

            isUserEmpty: () => {
                const state = get()
                return Object.values(state.user).some(value => !value)
            }
        }),

        {
            name: 'user-storage',
            storage: createJSONStorage(() => globalThis.localStorage)
        }
    )
)