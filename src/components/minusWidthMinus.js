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

const MinusWidth = ({
    viewWidth,
    activeStory,
}) => {
    const router = useRouter()

    return (
      <Tabbar className={viewWidth.tabletMinus.className}>
          <TabbarItem
              onClick={(e) => router.pushPage(PAGE_MAIN)}
              selected={activeStory === '###'}
              data-story="home"
              text="Главная">
              <Icon28Newsfeed/>
          </TabbarItem>
          <TabbarItem
              onClick={(e) => router.pushPage(PAGE_FRIENDS)}
              selected={activeStory === '###'}
              data-story="friends"
              text="Друзья">
              <Icon28Users/>
          </TabbarItem>
          <TabbarItem
              onClick={(e) => router.pushPage(PAGE_CREATE)}
              selected={activeStory === '###'}
              data-story="create"
              text="Создать">
              <Icon28WriteOutline/>
          </TabbarItem>
      </Tabbar>
  )
}

export default MinusWidth