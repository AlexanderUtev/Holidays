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
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
import Icon24ReplyOutline from '@vkontakte/icons/dist/24/reply_outline';
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
					 Пасха
					</PanelHeader>
					<Group>
					<Div>
				Здесь Вы можете найти поздравления к Пасхе!
						</Div>
						</Group>

						{new_year.pascha[0] !== undefined ? <Group> <Div>
						{new_year.pascha[0]}
						</Div>
						<Div style={{display: 'flex'}}>
						<Button level='commerce' onClick={() => {
							props.copyToClipboard(new_year.pascha[props.current_text])
						}}  size="x" stretched >Копировать</Button>
						 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
							props.preview(new_year.pascha[0])
						}}  size="x" stretched ><Icon24ReplyOutline/></Button>
						<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
						 props.fav(new_year.pascha[0])
					 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
							</Div> </Group>: null}

							{new_year.pascha[1] !== undefined ? <Group> <Div>
							{new_year.pascha[1]}
							</Div>
							<Div style={{display: 'flex'}}>
							<Button level='commerce' onClick={() => {
								props.copyToClipboard(new_year.pascha[props.current_text])
							}}  size="x" stretched >Копировать</Button>
							 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
								 props.preview(new_year.pascha[1])
							}}  size="x" stretched ><Icon24ReplyOutline/></Button>
							<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
							 props.fav(new_year.pascha[1])
						 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
								</Div> </Group>: null}

								{new_year.pascha[2] !== undefined ? <Group> <Div>
							 {new_year.pascha[2]}
							 </Div>
								<Div style={{display: 'flex'}}>
								<Button level='commerce' onClick={() => {
									props.copyToClipboard(new_year.pascha[props.current_text])
								}}  size="x" stretched >Копировать</Button>
								 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
									props.preview(new_year.pascha[2])
								}}  size="x" stretched ><Icon24ReplyOutline/></Button>
								<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
									props.fav(new_year.pascha[2])
							 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
									</Div> </Group>: null}

								 {new_year.pascha[3] !== undefined ? <Group> <Div>
								{new_year.pascha[3]}
								</Div>
								<Div style={{display: 'flex'}}>
								<Button level='commerce' onClick={() => {
									props.copyToClipboard(new_year.pascha[props.current_text])
								}}  size="x" stretched >Копировать</Button>
								 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
									props.preview(new_year.pascha[3])
								}}  size="x" stretched ><Icon24ReplyOutline/></Button>
								<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
									props.fav(new_year.pascha[3])
							 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
									</Div> </Group>: null}

									{new_year.pascha[4] !== undefined ? <Group> <Div>
									{new_year.pascha[4]}
									</Div>
									<Div style={{display: 'flex'}}>
									<Button level='commerce' onClick={() => {
										props.copyToClipboard(new_year.pascha[props.current_text])
									}}  size="x" stretched >Копировать</Button>
									 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
									props.preview(new_year.pascha[4])
									}}  size="x" stretched ><Icon24ReplyOutline/></Button>
									<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
									 props.fav(new_year.pascha[4])
								 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
										</Div> </Group>: null}

										{new_year.pascha[5] !== undefined ? <Group> <Div>
										{new_year.pascha[5]}
										</Div>
										<Div style={{display: 'flex'}}>
										<Button level='commerce' onClick={() => {
											props.copyToClipboard(new_year.pascha[props.current_text])
										}}  size="x" stretched >Копировать</Button>
										 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
										props.preview(new_year.pascha[5])
										}}  size="x" stretched ><Icon24ReplyOutline/></Button>
										<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
										 props.fav(new_year.pascha[5])
									 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
											</Div> </Group>: null}

											{new_year.pascha[6] !== undefined ? <Group> <Div>
											{new_year.pascha[6]}
											</Div>
											<Div style={{display: 'flex'}}>
											<Button level='commerce' onClick={() => {
												props.copyToClipboard(new_year.pascha[props.current_text])
											}}  size="x" stretched >Копировать</Button>
											 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
												props.preview(new_year.pascha[6])
											}}  size="x" stretched ><Icon24ReplyOutline/></Button>
											<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
											 props.fav(new_year.pascha[6])
										 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
												</Div> </Group>: null}


												{new_year.pascha[7] !== undefined ? <Group> <Div>
												{new_year.pascha[7]}
												</Div>
												<Div style={{display: 'flex'}}>
												<Button level='commerce' onClick={() => {
													props.copyToClipboard(new_year.pascha[props.current_text])
												}}  size="x" stretched >Копировать</Button>
												 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
												props.preview(new_year.pascha[7])
												}}  size="x" stretched ><Icon24ReplyOutline/></Button>
												<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
												props.fav(new_year.pascha[7])
											 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
													</Div> </Group>: null}


													{new_year.pascha[8] !== undefined ? <Group> <Div>
													{new_year.pascha[8]}
													</Div>
													<Div style={{display: 'flex'}}>
													<Button level='commerce' onClick={() => {
														props.copyToClipboard(new_year.pascha[props.current_text])
													}}  size="x" stretched >Копировать</Button>
													 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
													props.preview(new_year.pascha[8])
													}}  size="x" stretched ><Icon24ReplyOutline/></Button>
													<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
													props.fav(new_year.pascha[8])
												 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
														</Div> </Group>: null}


														{new_year.pascha[9] !== undefined ? <Group> <Div>
														{new_year.pascha[9]}
														</Div>
														<Div style={{display: 'flex'}}>
														<Button level='commerce' onClick={() => {
															props.copyToClipboard(new_year.pascha[props.current_text])
														}}  size="x" stretched >Копировать</Button>
														 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
														props.preview(new_year.pascha[9])
														}}  size="x" stretched ><Icon24ReplyOutline/></Button>
														<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
														 props.fav(new_year.pascha[9])
													 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
															</Div> </Group>: null}



															{new_year.pascha[10] !== undefined ? <Group> <Div>
															{new_year.pascha[10]}
															</Div>
															<Div style={{display: 'flex'}}>
															<Button level='commerce' onClick={() => {
																props.copyToClipboard(new_year.pascha[props.current_text])
															}}  size="x" stretched >Копировать</Button>
															 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
															props.preview(new_year.pascha[10])
															}}  size="x" stretched ><Icon24ReplyOutline/></Button>
															<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
															props.fav(new_year.pascha[10])
														 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
																</Div> </Group>: null}



																{new_year.pascha[11] !== undefined ? <Group> <Div>
																{new_year.pascha[11]}

																</Div>
																<Div style={{display: 'flex'}}>
																<Button level='commerce' onClick={() => {
																	props.copyToClipboard(new_year.pascha[props.current_text])
																}}  size="x" stretched >Копировать</Button>
																 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
																props.preview(new_year.pascha[11])
																}}  size="x" stretched ><Icon24ReplyOutline/></Button>
																<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
																props.fav(new_year.pascha[11])
															 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
																	</Div> </Group>: null}

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
