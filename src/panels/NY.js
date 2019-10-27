import React from 'react';
import PropTypes from 'prop-types';
import {  Panel, FixedLayout, Div,  Select, List,  FormStatus, Cell, Switch, Input, Textarea, platform, ListItem, HeaderButton,IOS, File, FormLayout, Alert, Button, PanelHeader, Group} from '@vkontakte/vkui'
import new_year from "./texts";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import connect from '@vkontakte/vkui-connect';
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
					 Новый год
					</PanelHeader>
					<Group>
					<Div>
				Здесь Вы можете найти поздравления к Новому Году!
						</Div>
						</Group>

						{new_year.new_year[0] !== undefined ? <Group> <Div>
						{new_year.new_year[0]}
						</Div>
						<Div style={{display: 'flex'}}>
						<Button level='commerce' onClick={() => {
							props.copyToClipboard(new_year.new_year[props.current_text])
						}}  size="x" stretched >Копировать</Button>
						 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
							props.preview(new_year.new_year[0])
						}}  size="x" stretched ><Icon24ReplyOutline/></Button>
						<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
						 props.fav(new_year.new_year[0])
					 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
							</Div> </Group>: null}

							{new_year.new_year[1] !== undefined ? <Group> <Div>
							{new_year.new_year[1]}
							</Div>
							<Div style={{display: 'flex'}}>
							<Button level='commerce' onClick={() => {
								props.copyToClipboard(new_year.new_year[props.current_text])
							}}  size="x" stretched >Копировать</Button>
							 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
								 props.preview(new_year.new_year[1])
							}}  size="x" stretched ><Icon24ReplyOutline/></Button>
							<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
							 props.fav(new_year.new_year[1])
						 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
								</Div> </Group>: null}

								{new_year.new_year[2] !== undefined ? <Group> <Div>
							 {new_year.new_year[2]}
							 </Div>
								<Div style={{display: 'flex'}}>
								<Button level='commerce' onClick={() => {
									props.copyToClipboard(new_year.new_year[props.current_text])
								}}  size="x" stretched >Копировать</Button>
								 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
									props.preview(new_year.new_year[2])
								}}  size="x" stretched ><Icon24ReplyOutline/></Button>
								<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
									props.fav(new_year.new_year[2])
							 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
									</Div> </Group>: null}

								 {new_year.new_year[3] !== undefined ? <Group> <Div>
								{new_year.new_year[3]}
								</Div>
								<Div style={{display: 'flex'}}>
								<Button level='commerce' onClick={() => {
									props.copyToClipboard(new_year.new_year[props.current_text])
								}}  size="x" stretched >Копировать</Button>
								 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
									props.preview(new_year.new_year[3])
								}}  size="x" stretched ><Icon24ReplyOutline/></Button>
								<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
									props.fav(new_year.new_year[3])
							 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
									</Div> </Group>: null}

									{new_year.new_year[4] !== undefined ? <Group> <Div>
									{new_year.new_year[4]}
									</Div>
									<Div style={{display: 'flex'}}>
									<Button level='commerce' onClick={() => {
										props.copyToClipboard(new_year.new_year[props.current_text])
									}}  size="x" stretched >Копировать</Button>
									 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
									props.preview(new_year.new_year[4])
									}}  size="x" stretched ><Icon24ReplyOutline/></Button>
									<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
									 props.fav(new_year.new_year[4])
								 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
										</Div> </Group>: null}

										{new_year.new_year[5] !== undefined ? <Group> <Div>
										{new_year.new_year[5]}
										</Div>
										<Div style={{display: 'flex'}}>
										<Button level='commerce' onClick={() => {
											props.copyToClipboard(new_year.new_year[props.current_text])
										}}  size="x" stretched >Копировать</Button>
										 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
										props.preview(new_year.new_year[5])
										}}  size="x" stretched ><Icon24ReplyOutline/></Button>
										<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
										 props.fav(new_year.new_year[5])
									 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
											</Div> </Group>: null}

											{new_year.new_year[6] !== undefined ? <Group> <Div>
											{new_year.new_year[6]}
											</Div>
											<Div style={{display: 'flex'}}>
											<Button level='commerce' onClick={() => {
												props.copyToClipboard(new_year.new_year[props.current_text])
											}}  size="x" stretched >Копировать</Button>
											 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
												props.preview(new_year.new_year[6])
											}}  size="x" stretched ><Icon24ReplyOutline/></Button>
											<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
											 props.fav(new_year.new_year[6])
										 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
												</Div> </Group>: null}


												{new_year.new_year[7] !== undefined ? <Group> <Div>
												{new_year.new_year[7]}
												</Div>
												<Div style={{display: 'flex'}}>
												<Button level='commerce' onClick={() => {
													props.copyToClipboard(new_year.new_year[props.current_text])
												}}  size="x" stretched >Копировать</Button>
												 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
												props.preview(new_year.new_year[7])
												}}  size="x" stretched ><Icon24ReplyOutline/></Button>
												<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
												props.fav(new_year.new_year[7])
											 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
													</Div> </Group>: null}


													{new_year.new_year[8] !== undefined ? <Group> <Div>
													{new_year.new_year[8]}
													</Div>
													<Div style={{display: 'flex'}}>
													<Button level='commerce' onClick={() => {
														props.copyToClipboard(new_year.new_year[props.current_text])
													}}  size="x" stretched >Копировать</Button>
													 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
													props.preview(new_year.new_year[8])
													}}  size="x" stretched ><Icon24ReplyOutline/></Button>
													<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
													props.fav(new_year.new_year[8])
												 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
														</Div> </Group>: null}


														{new_year.new_year[9] !== undefined ? <Group> <Div>
														{new_year.new_year[9]}
														</Div>
														<Div style={{display: 'flex'}}>
														<Button level='commerce' onClick={() => {
															props.copyToClipboard(new_year.new_year[props.current_text])
														}}  size="x" stretched >Копировать</Button>
														 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
														props.preview(new_year.new_year[9])
														}}  size="x" stretched ><Icon24ReplyOutline/></Button>
														<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
														 props.fav(new_year.new_year[9])
													 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
															</Div> </Group>: null}



															{new_year.new_year[10] !== undefined ? <Group> <Div>
															{new_year.new_year[10]}
															</Div>
															<Div style={{display: 'flex'}}>
															<Button level='commerce' onClick={() => {
																props.copyToClipboard(new_year.new_year[props.current_text])
															}}  size="x" stretched >Копировать</Button>
															 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
															props.preview(new_year.new_year[10])
															}}  size="x" stretched ><Icon24ReplyOutline/></Button>
															<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
															props.fav(new_year.new_year[10])
														 }}  size="x" stretched ><Icon24FavoriteOutline/></Button>
																</Div> </Group>: null}



																{new_year.new_year[11] !== undefined ? <Group> <Div>
																{new_year.new_year[11]}

																</Div>
																<Div style={{display: 'flex'}}>
																<Button level='commerce' onClick={() => {
																	props.copyToClipboard(new_year.new_year[props.current_text])
																}}  size="x" stretched >Копировать</Button>
																 <Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
																props.preview(new_year.new_year[11])
																}}  size="x" stretched ><Icon24ReplyOutline/></Button>
																<Button style={{marginLeft: '5px'}} level='outline' onClick={() => {
																props.fav(new_year.new_year[11])
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
