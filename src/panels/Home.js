import React from 'react';
import PropTypes from 'prop-types';
import {  Panel, FixedLayout, Div, ListItem, Tappable, List, Cell, Tabbar, Epic, TabbarItem, Tooltip, HeaderButton, File, FormLayout, Alert, Button, PanelHeader, Group} from '@vkontakte/vkui'
import Icon24Qr from '@vkontakte/icons/dist/24/qr'
import Icon24WorkOutline from '@vkontakte/icons/dist/20/work_outline';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon24Delete from '@vkontakte/icons/dist/24/delete'
import Icon16CancelCircleOutline from '@vkontakte/icons/dist/16/cancel_circle_outline';
import connect from '@vkontakte/vkui-connect';
import Icon24MoneyCircle from '@vkontakte/icons/dist/24/money_circle';
import Icon56LockOutline from '@vkontakte/icons/dist/56/lock_outline';
import Icon28Users from '@vkontakte/icons/dist/28/users';
import Icon16Users from '@vkontakte/icons/dist/16/users';
import Icon24Attachments from '@vkontakte/icons/dist/24/attachments';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Repeat from '@vkontakte/icons/dist/24/repeat';
import Icon24UserOutline from '@vkontakte/icons/dist/24/user_outline';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon16LikeOutline from '@vkontakte/icons/dist/16/like_outline';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon16UserAdd from '@vkontakte/icons/dist/16/user_add';

const Home = props => (
	<Panel id={props.id}>
	<Tappable>
	<PanelHeader 	/*left={<HeaderButton style={{ marginLeft: 10 }} onClick={()=> connect.send("VKWebAppJoinGroup", {"group_id": 187015622})} >
		 <Icon28Users/>
		</HeaderButton>}*/>Поздравления</PanelHeader>
			 </Tappable>
	<Group>
					<Div>
			Привет, {props.userName}! Добро пожаловать в сервис, в котором ты сможешь найти поздравления для друзей и знакомых!
						</Div>
						</Group>
						<Group title="">

 {/*<Button size='xl'/>*/}
											 <List>
												 <Cell expandable onClick={props.onStoryChange} data-story='ny' >Новый Год</Cell>
												 <Cell expandable onClick={props.onStoryChange} data-story='birthday' >День Рождения</Cell>
												 <Cell expandable onClick={props.onStoryChange} data-story='martch_8' >8 марта</Cell>
												 <Cell expandable onClick={props.onStoryChange} data-story='feb_23' >23 февраля</Cell>
												 <Cell expandable onClick={props.onStoryChange} data-story='pascha' >Пасха</Cell>
												 <Cell expandable onClick={props.onStoryChange} data-story='day_of_knowns' >День знаний</Cell>

											{	/*
												<Cell expandable onClick={props.onStoryChange} data-story='pressure' >К</Cell>
												<Cell expandable onClick={props.onStoryChange} data-story='mosh' >Мощность</Cell>
												<Cell expandable onClick={props.onStoryChange} data-story='speed' >Скорость</Cell>
												<Cell expandable onClick={props.onStoryChange} data-story='energy' >Энергия</Cell>
												<Cell expandable onClick={props.onStoryChange} data-story='radiate' >Количество информации</Cell>
												<Cell expandable onClick={props.onStoryChange} data-story='corn'>Мера геометрического угла</Cell>
												<Cell expandable onClick={props.onStoryChange} data-story='radiate' >Доза облучения (В активной разработке)</Cell>
											 */}

											 </List>
											 		{/*<Button size='xl'/>*/}


										 </Group>

										 <Div>

										 { props.group === '1' ? <Button size="l" style={{marginLeft: '120px'}} data-story='pressure' level="secondary" onClick={() => {
											 connect.send("VKWebAppJoinGroup", {"group_id": 187015622})
										 	}
										 }>
										 <Icon16UserAdd/></Button> : <Button size="l" disabled style={{marginLeft: '120px'}} data-story='pressure' level="secondary" onClick={() => {
											 connect.send("VKWebAppJoinGroup", {"group_id": 187015622})
										 	}
										 }>
										 <Icon16Users/></Button>}

										 {props.favorite === '1' ? <Button size="l" style={{marginLeft: '10px'}} data-story='pressure' level="secondary" onClick={() =>
											 { connect.send("VKWebAppAddToFavorites", {})

										 		}
											}>
										 <Icon16LikeOutline/></Button> : <Button disabled size="l" style={{marginLeft: '10px'}} data-story='pressure' level="secondary" onClick={() =>
											 { connect.send("VKWebAppAddToFavorites", {})
										 		}
											}>
										 <Icon16Like/></Button>}
										 </Div>

											</Panel>

);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	//onStoryChange: PropTypes.string.onStoryChange,
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
