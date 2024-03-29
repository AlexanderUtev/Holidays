import React from 'react';
import PropTypes from 'prop-types';
import {  Panel, FixedLayout, Tappable, Div, Select, List, Cell, Switch, Counter, Input, Textarea, ListItem, HeaderButton,IOS, File, FormLayout, Alert, Button, PanelHeader, Group} from '@vkontakte/vkui'
import Icon24Qr from '@vkontakte/icons/dist/24/qr'
import Icon20WorkOutline from '@vkontakte/icons/dist/20/work_outline';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon24Delete from '@vkontakte/icons/dist/24/delete'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24PlaySpeed from '@vkontakte/icons/dist/24/play_speed';
import Icon16CancelCircleOutline from '@vkontakte/icons/dist/16/cancel_circle_outline';
import connect from '@vkontakte/vkui-connect';
const text = 'TEST';
const isShowVkLogo = true;
const Gen = props => (
	<Panel id={props.id}>
	<PanelHeader>	Настройки </PanelHeader>
					<Group>
						 <List>
							 <Cell asideContent={<Switch onChange={() => props.eruda()} />}>Дебаг консоль</Cell>
						 	<Cell  indicator={<Counter>1.0</Counter>}>Верcия</Cell>
							<Cell  indicator={<Counter>Alexander Utev</Counter>}>Разработчик</Cell>
						 </List>
					 </Group>
	</Panel>
);

Gen.propTypes = {
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

export default Gen;
