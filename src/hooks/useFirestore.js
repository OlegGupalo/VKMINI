import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { onSnapshot, query,collection, orderBy } from "firebase/firestore"


export const useFirestore = (name) => {
    const [docs, setDocs] = useState([])


    useEffect(() => {
        let isMounted = true
        onSnapshot(query(collection(db, name), orderBy('createdAt', 'desc')), snapshot => {
            let documents = []
            snapshot.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            })
            if(isMounted) {
                setDocs(documents)
            }
        })
        return () => {isMounted = false}
    }, [collection])

    return {docs}
}