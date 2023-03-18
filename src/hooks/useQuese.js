import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { onSnapshot, query,collection, orderBy, getDoc, doc } from "firebase/firestore"

export const useQuese = (id) => {
    const [docs, setDocs] = useState([])


    useEffect(() => {
        async function getQuese() {
            const docRef = doc(db, "queses", id)
            const docSnap = await getDoc(docRef) 
            setDocs(docSnap.data())
        }
        getQuese()
    }, [id])

    return {docs}
}
