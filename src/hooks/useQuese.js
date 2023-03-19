import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { onSnapshot, query,collection, orderBy, getDoc, doc } from "firebase/firestore"

export const useQuese = (id) => {
    const [docs, setDocs] = useState([])


    useEffect(() => {
        let isMounted = true
        async function getQuese() {
            const docRef = doc(db, "queses", id)
            const docSnap = await getDoc(docRef) 
            if(isMounted) {
                setDocs(docSnap.data())
            } 
        }
        getQuese()
        return () => {isMounted = false}
    }, [id])

    return {docs}
}
