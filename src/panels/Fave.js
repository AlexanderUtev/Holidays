import React from 'react';
import PropTypes from 'prop-types';
import {  Panel, FixedLayout, Div,  Select, List,  FormStatus, Cell, Switch, Input, Textarea, platform, ListItem, HeaderButton,IOS, File, FormLayout, Alert, Button, PanelHeader, Group} from '@vkontakte/vkui'
import Icon24Qr from '@vkontakte/icons/dist/24/qr'
import new_year from "./texts";
import Icon20WorkOutline from '@vkontakte/icons/dist/20/work_outline';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon24Delete from '@vkontakte/icons/dist/24/delete'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24PlaySpeed from '@vkontakte/icons/dist/24/play_speed';
import Icon16CancelCircleOutline from '@vkontakte/icons/dist/16/cancel_circle_outline';
import connect from '@vkontakte/vkui-connect';
import Icon24MoneyCircle from '@vkontakte/icons/dist/24/money_circle';
import Icon24Repeat from '@vkontakte/icons/dist/24/repeat';
import Icon24WorkOutline from '@vkontakte/icons/dist/20/work_outline';
const text = 'TEST';
const isShowVkLogo = true;
var md5 = require('md5');
const { base64encode, base64decode } = require('nodejs-base64');
require("pidcrypt/seedrandom")
var pidCrypt = require("pidcrypt")
require("pidcrypt/aes_cbc")
var aes = new pidCrypt.AES.CBC()
var select_pos;
const osname = platform();
var value;
var value_end;
const Bought = props => (
	<Panel id={props.id}>
	<PanelHeader left={<HeaderButton onClick={props.onStoryChange} data-story="home">
			{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
		</HeaderButton>}>
					 Избранное
					</PanelHeader>
					<Group>
					<Div>
				Здесь Вы можете найти Ваши избранные поздравления!
						</Div>
						</Group>
						<Group>
						<Div>
								Раздел в разработке, или не в разработке, или вообще не будет разработан.
							</Div>

</Group>
					</Panel>

);

Bought.propTypes = {
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

export default Bought;
