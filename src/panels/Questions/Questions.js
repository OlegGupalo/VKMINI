import { Avatar, Button, Cell, Div, Group, Header, Panel, PanelHeader, PanelHeaderBack, Paragraph, Title } from "@vkontakte/vkui";
import { useEffect, useState } from "react"
import bridge from '@vkontakte/vk-bridge';  
import { useRouter } from "@happysanta/router";
import { Icon24CrownOutline } from '@vkontakte/icons';

const info = [
    {first_name: "Evgeniy", last_name: "Olga"}
]

const Questions = ({
    id, fetchedUser
}) => {
    const router = useRouter()
    const [count, setCount] = useState(0);
    const [friends, setFriends] = useState(null)

    const onClickBtn = async () => {
        await bridge.send('VKWebAppGetFriends', {
            multi: true
        })
        .then((data) => { 
            console.log("DATA", data)
            if (data.users) {
                setFriends(data.users)
            }
        })
        .catch((error) => {
            // Ошибка
            console.log(error);
        });
    }
    useEffect(() => {
        const onClickBtn = async () => {
            await bridge.send('VKWebAppGetFriends', {
                multi: true
            })
            .then((data) => { 
                console.log("DATA", data)
                if (data.users) {
                    setFriends(data.users)
                }
            })
            .catch((error) => {
                // Ошибка
                console.log(error);
            });
        }
        onClickBtn()
    }, [])

    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={() => router.popPage()} />}>Друзья</PanelHeader>
            <Div>
                {friends && friends.map((frnd, key) => {
                    return <Group 
                    style={{position: 'relative', marginBottom: '20px'}}
                    header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
                    <Cell
                        before={frnd.photo_200 ? <Avatar src={frnd.photo_200}/> : null}
                        subtitle={frnd.city && frnd.city.title ? frnd.city.title : ''}
                    >
                        {`${frnd.first_name} ${frnd.last_name}`}
                    </Cell>
                    <Div style={{
                        textAlign: 'right',
                        position: 'absolute',
                        bottom: 0,
                        right: '10px',
                        marginRight: '2rem',
                        marginBottom: '1rem',
                    }}>
                        <div style={{textAlign: 'center'}}><Icon24CrownOutline style={{
                            marginLeft: '70px'
                        }} />
                        <Title style={{
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            
                            
                        }}>Лучшая череда побед - {(key + 1) * 3}</Title></div>
                    </Div>
                </Group>
                })}
            </Div>
        </Panel>
    )
}

export default Questions