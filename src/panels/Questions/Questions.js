import { Button, Div, Group, Panel, PanelHeader, PanelHeaderBack, Paragraph } from "@vkontakte/vkui";
import { useEffect, useState } from "react"
import bridge from '@vkontakte/vk-bridge';  
import { useRouter } from "@happysanta/router";

const Questions = ({
    id, fetchedUser
}) => {
    const router = useRouter()
    const [count, setCount] = useState(0);
    const [friends, setFriends] = useState(null)

    useEffect(() => {
        bridge.send('VKWebAppGetEmail')
        .then((data) => { 
            if (data.email) {
            // Доступ к электронной почте получен
            }
        })
        .catch((error) => {
            // Ошибка
            console.log(error);
        });
    }, [])

    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={() => router.popPage()} />}>Друзья</PanelHeader>
            <Group>
                <Div>
                    {friends && friends.map((e,key) => {
                        return <Paragraph key={key}>{e.first_name}</Paragraph>
                    })}
                </Div>
            </Group>
        </Panel>
    )
}

export default Questions