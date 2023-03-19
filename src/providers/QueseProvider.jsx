import { createContext, useEffect, useMemo, useState } from "react";
import { addDoc, collection, setDoc, doc, updateDoc } from '@firebase/firestore'
import { auth, db, login, logout, register } from "../firebase/config";

export const QueseContext = createContext()

export const QueseProvider = ({
    children
}) => {
    const [userData, setUserData] = useState(null)
    const [isLoadingInitial, setIsLoadingInitial] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

        



    useEffect(() => onAuthStateChanged(auth, (user) => {
        setUserData(user || null)
        setIsLoadingInitial(false)
    }), [])

    const value = useMemo(() => ({
        user: userData,
        isLoading,
        login: loginHandler,
        register: registerHandler,
        logout: logoutHandler,
        update: updateUser,
    }), [userData, isLoading])

    return <AuthContext.Provider value={value}>
        {!isLoadingInitial && children}
    </AuthContext.Provider>
}