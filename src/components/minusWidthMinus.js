import { useRouter } from "@happysanta/router"
import { 
	View, 
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
	Group, 
	PanelHeaderBack, 
	Placeholder,
  Root, 
} from '@vkontakte/vkui';
import { PAGE_CREATE, PAGE_FRIENDS, PAGE_MAIN } from "..";
import { Icon28Newsfeed, Icon28NewsfeedOutline } from "@vkontakte/icons";

const MinusWidth = ({
    viewWidth,
    activeStory,
}) => {
    const router = useRouter()

    return (
        <Tabbar className={viewWidth.tabletMinus.className}>
              <TabbarItem
                onClick={(e) => router.pushPage(PAGE_MAIN)}
                selected={activeStory === 'home'}
                data-story="home"
                text="Главная"
              >
                <Icon28Newsfeed />
              </TabbarItem>
              <TabbarItem
                onClick={(e) => router.pushPage(PAGE_FRIENDS)}
                selected={activeStory === 'friends'}
                data-story="friends"
                text="Друзья"
              >
                <Icon28Newsfeed />
              </TabbarItem>
              <TabbarItem
                  onClick={(e) => router.pushPage(PAGE_CREATE)}
                  selected={activeStory === 'create'}
                  data-story="create"
                  text="Создать"
                >
                  <Icon28NewsfeedOutline />
                </TabbarItem>
        </Tabbar>
    )
}

export default MinusWidth