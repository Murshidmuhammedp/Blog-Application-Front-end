import { create } from "zustand";


const userAuth = create((set) => ({
    user: typeof window !== "undefined" && JSON.parse(localStorage.getItem('user')) || null,
    setUser: (newUser) => set(() => ({ user: newUser }))
}))


export default userAuth;