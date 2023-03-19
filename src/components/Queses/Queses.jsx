import { Div, Group } from "@vkontakte/vkui"
import QuestionItem from "./QueseItem"
import { useFirestore } from "../../hooks/useFirestore"

const Queses = () => {
    const {docs} = useFirestore('queses')
    console.log("DOCS", docs)
    return <Div>
        {docs.map(items => {
            return (
                <Group mode="plain" key={items.id}>
                    <QuestionItem {...items} imageUrl={"https://random.imagecdn.app/500/300"}/>
                </Group>
            ) 
        })}
    </Div>
}

export default Queses