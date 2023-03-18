import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { 
	View, 
	AdaptivityProvider, 
	AppRoot, 
	ConfigProvider, 
	SplitLayout, 
	SplitCol,
	useAdaptivityConditionalRender,
	usePlatform, 
	Platform, 
	PanelHeader,
  Root, 
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home/Home';
import Questions from './panels/Questions/Questions';
import PlusWidth from './components/maxWidthPlus';
import Create from './panels/Create/Create';
import {PANEL_CREATE, PANEL_FRIENDS, PANEL_MAIN, PANEL_PRODUCT_ITEM, PANEL_PROFILE, VIEW_PRODUCT_ITEM, VIEW_MAIN} from './index.js'
import { useLocation, useRouter } from '@happysanta/router';
import QueseContainer from './components/Queses/QueseContainer';
import MinusWidth from './components/minusWidthMinus';


const App = () => {
	const [fetchedUser, setUser] = useState(null);
	const platform = usePlatform();
	const { viewWidth } = useAdaptivityConditionalRender();
	const [activeStory, setActiveStory] = React.useState('home');
  const [friends, setFriends] = useState(null)
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
	const isVKCOM = platform !== Platform.VKCOM;

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
		bridge.send('VKWebAppShowSlidesSheet', {
			slides: [
			{
				media: {
					type: 'image',
					blob: 'data:image/jpeg;base64,<base64-image-data>'
				},
				title: 'Квикз приложение',
				subtitle: 'Приложение используется для быстрого создания и удобного прохождения собственных написанных тестов. Посоревнуйся с друзьями!'
			}
			]})
			.then((data) => { 
				if (data.result) {
					console.log(data)
				}
			})
			.catch((error) => {
				// Ошибка
				console.log(error);
			});
	}, []);
  const location = useLocation()
	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
				<SplitLayout
					header={isVKCOM && <PanelHeader separator={false} />}
					style={{ justifyContent: 'center' }}
					>
					{viewWidth.tabletPlus && (
						<SplitCol className={viewWidth.tabletPlus.className} width={280} maxWidth={280}>
							<PlusWidth 
								viewWidth={viewWidth}
								isVKCOM={isVKCOM}
								activeStory={activeStory}
								onStoryChange={onStoryChange}
								fetchedUser={fetchedUser}
							/>
						</SplitCol>
					)}
          {viewWidth.tabletMinus && (
            <MinusWidth 
              viewWidth={viewWidth}
              activeStory={activeStory}
            />
          )}

      <SplitCol width="100%" maxWidth="800px" stretchedOnMobile autoSpaced>
        <Root
          activeView={location.getViewId()}
        >
          <View id={VIEW_MAIN} activePanel={location.getViewActivePanel(VIEW_MAIN)}>
            <Questions id={PANEL_PROFILE} go={onStoryChange} />
            <Home id={PANEL_MAIN} fetchedUser={fetchedUser} />
            <Questions id={PANEL_FRIENDS} friends={friends} />
            <Create id={PANEL_CREATE} fetchedUser={fetchedUser} />
            <QueseContainer id={PANEL_PRODUCT_ITEM} />
          </View>          
        </Root>
      </SplitCol>
    </SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
