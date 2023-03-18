import {
	PanelHeader, 
	Panel, 
	Group, 
    Cell,
    Header,
    PanelHeaderBack
} from '@vkontakte/vkui';
import {Create as CreateForm} from './../../components/Create/Create'
import { useRouter } from '@happysanta/router';

const Create = ({
    id,
    fetchedUser
}) => {
    const router = useRouter()
    return ( 
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={() => router.popPage()} />}>Создать</PanelHeader>
            {fetchedUser &&
            <Group>
                
            </Group>}

            <Group>
                <CreateForm />
            </Group>
        </Panel>
    )
}

export default Create