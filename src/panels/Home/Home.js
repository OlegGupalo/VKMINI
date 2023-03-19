import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge'
import './Home.css'
import Queses from '../../components/Queses/Queses';
import { useRouter } from '@happysanta/router';

const Home = ({ id, fetchedUser }) => {
	const router = useRouter()

	// return <Panel>
	// 	<PanelHeader>Example</PanelHeader>
	// 	<Group title='navigation title'>
	// 		<Div>
	// 			<Button level="2" size="xl">
	// 				Show me the persik
	// 			</Button>
	// 		</Div>
	// 	</Group>
	// </Panel>

	return <Panel id={id}>
		<PanelHeader>Главная</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				subtitle={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Список всех квизов</Header>}>
			<Queses />
		</Group>
	</Panel>
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
