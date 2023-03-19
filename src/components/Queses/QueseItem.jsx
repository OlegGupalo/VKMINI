import { Button, Card, CardGrid, ContentCard, Div, Paragraph, Title } from "@vkontakte/vkui"
import './index.css'
import { useRouter } from "@happysanta/router"
import { PAGE_PRODUCT_ITEM } from "../.."
import { useQuese } from "../../hooks/useQuese"

const QuestionItem = ({
    id,
    title,
    imageUrl,
}) => {
    const router = useRouter()
    return <CardGrid size="l">
        <Card mode="shadow">
            <ContentCard 
                onClick={() => router.pushPage(PAGE_PRODUCT_ITEM, {id: id})}
                src={imageUrl}
                header={title}
                mode="shadow"
                subtitle={"subtitle"}
                maxHeight={300}
            />

            {/* <Div className="quesesItem">
                <Button onClick={() => router.pushPage(PAGE_PRODUCT_ITEM, {id: id})} className="queseTitle">{title}</Button>
                <Paragraph className="queseDescription">{description}</Paragraph>
            </Div> */}
        </Card>
    </CardGrid>
}

export default QuestionItem