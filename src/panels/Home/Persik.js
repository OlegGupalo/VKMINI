import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import persik from './../../img/shanks.jpg';
import './Persik.css';
import { useRouter } from '@happysanta/router';

const Persik = props => {
	const router = useRouter()

	return <Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={() => router.popPage()} />}
		>
			Persik handler
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
	</Panel>
};

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
