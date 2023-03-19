import {
    View,
    ScreenSpinner,
    AdaptivityProvider,
    AppRoot,
    ConfigProvider,
    SplitLayout,
    SplitCol,
    Epic,
    useAdaptivityConditionalRender,
    Tabbar,
    TabbarItem,
    Badge,
    usePlatform,
    Platform,
    PanelHeader,
    Panel,
    Cell,
    Group,
    Counter,
    PanelHeaderBack,
    Placeholder,
    Button
} from '@vkontakte/vkui';
import {
    Icon28AccessibilityOutline,
    Icon28MessageOutline,
    Icon28Newsfeed,
    Icon28NewsfeedOutline,
    Icon28Users,
    Icon28WriteOutline,
    Icon28UserOutline
} from '@vkontakte/icons';
import {useRouter} from '@happysanta/router';
import {PAGE_CREATE, PAGE_FRIENDS, PAGE_MAIN, PAGE_PROFILE} from '..';


const PlusWidth = ({
    viewWidth,
    isVKCOM,
    activeStory,
    onStoryChange,

}) => {
    const router = useRouter()
    
    return <Panel>
        {isVKCOM && <PanelHeader/>}
        <Group>
            <Cell
                disabled={activeStory === 'main'}
                style={activeStory === 'main'
                ? {
                    backgroundColor: 'var(--vkui--color_background_secondary)',
                    borderRadius: 8
                }
                : {}}
                data-story="main"
                onClick={(e) => router.pushPage(PAGE_MAIN)}
                before={< Icon28Newsfeed />}>
                Главная
            </Cell>
            <Cell
                disabled={activeStory === 'create'}
                style={activeStory === 'create'
                ? {
                    backgroundColor: 'var(--vkui--color_background_secondary)',
                    borderRadius: 8
                }
                : {}}
                data-story="create"
                onClick={(e) => router.pushPage(PAGE_CREATE)}
                before={< Icon28WriteOutline />}>
                Создать
            </Cell>
            <Cell
                disabled={activeStory === 'friends'}
                style={activeStory === 'friends'
                ? {
                    backgroundColor: 'var(--vkui--color_background_secondary)',
                    borderRadius: 8
                }
                : {}}
                data-story="friends"
                onClick={(e) => router.pushPage(PAGE_FRIENDS)}
                before={< Icon28Users />}>
                Друзья
            </Cell>
        </Group>
    </Panel>
}

export default PlusWidth