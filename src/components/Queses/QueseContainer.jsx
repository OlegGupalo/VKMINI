import { useParams, useRouter } from "@happysanta/router"
import { Panel, PanelHeader, PanelHeaderBack, Placeholder, ScreenSpinner } from "@vkontakte/vkui"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase/config"
import { useQuese } from "../../hooks/useQuese"

const QueseContainer = ({
    ids
}) => {
    const router = useRouter()
    const {id} = useParams()
    // const [product, setProduct] = useState(null)
    // const [loading, setIsLoading] = useState("done")
    
    const {docs} = useQuese(id)
    console.log(docs)

    return <Panel id={ids}>
        {!docs ? <ScreenSpinner state="loading" /> : <>
                <PanelHeader 
                    before={<PanelHeaderBack onClick={() => router.popPage()} />}
                >
                    {docs.title}
                </PanelHeader>
                <Placeholder>
                    product id - {id}
                </Placeholder>
            </>
        }
    </Panel>
}

export default QueseContainer