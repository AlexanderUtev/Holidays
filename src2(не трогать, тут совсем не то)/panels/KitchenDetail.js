import React from 'react';
import PropTypes from 'prop-types';
import {Panel, HorizontalScroll, Tooltip, Tappable, PanelHeader, Group, Gallery, Div, Button, platform, HeaderButton, IOS, Avatar, itemStyle} from '@vkontakte/vkui';
import connect from '@vkontakte/vkui-connect';
import vkuiConnect from '@vkontakte/vkui-connect';
import '@vkontakte/vkui/dist/vkui.css';


import kitchen from '../kitchen/kitchen.json';
import recipes_first_meal from '../category_menu/recipes_first_meal/recipes_first_meal.json';
import './styles.css';
import Home from './Home';


import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24ReplyOutline from '@vkontakte/icons/dist/24/reply_outline';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon24Reply from '@vkontakte/icons/dist/24/reply';




const osName = platform();

class KitchenDetail extends React.Component {
	constructor (props) {
		super(props);


		const URL = new URLSearchParams(window.location.search);

	  	if(URL.get('vk_platform') === 'desktop_web') {
			this.showTool = true;
		} else {
			this.showTool = false;
		}



		this.state = {
			recipeText: null,
			activeStory: "home",
			check: false,
			activePanel: 'feed',
            history: ['feed'],
			page: this.props.recipes_first_mealtartId,
			showTool: this.showTool

		};
	  }

	share = () => {
		connect.send("VKWebAppShowWallPostBox", {"message": `Я читаю карточку про ${kitchen[this.props.recipeId].forPost} кухню, не выходя из ВКонтакте.\n\nХарактерные блюда:\n${kitchen[this.props.recipeId].CharacteristicDishes}\n\nИнформация:\n${kitchen[this.props.recipeId].description}\n\nПопробуй сам - https://vk.com/app7144202`, "attachments": "https://vk.com/app7144202"});
	}

	backkitchen = (e) => {
		this.setState({ activeStory: e.currentTarget.dataset.to })
		window.scrollTo(0,0)
	}

	goBack = () => {
		const history = [...this.state.history];
		history.pop();
		const activePanel = history[history.length - 1];
		if (activePanel === 'feed') {
		  vkuiConnect.send('VKWebAppDisableSwipeBack');
		}
		this.setState({ history, activePanel });
    }

	goForward = (activePanel) => {
		const history = [...this.state.history];
		history.push(activePanel);
		if (this.state.activePanel === 'feed') {
		  vkuiConnect.send('VKWebAppEnableSwipeBack');
		}
		this.setState({ history, activePanel });
	}


	render () {
		const osname = platform();
		return (
			<Panel id={this.props.id}>
				<PanelHeader
			left={<HeaderButton onClick={this.props.backkitchen} data-to="recipes">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>
			{kitchen[this.props.recipeId].name}
			</PanelHeader>



		<Group className="videl" title={kitchen[this.props.recipeId].name}>
                <img type="image" className="ico-kitchen" src={require("../kitchen"+kitchen[this.props.recipeId].path)}/>
        </Group>





				<Group title="Характерные блюда">
         <Div>
				 {kitchen[this.props.recipeId].CharacteristicDishes}
				 </Div>
				</Group>
				<Group title="Информация">
         <Div className="kitchen-text">
				 {kitchen[this.props.recipeId].description}
				 </Div>
				</Group>
				<Div className="kitchen-text">
				<Button before={<Icon24Reply/>} onClick={this.share} size="xl" level="secondary" stretched style={{ marginRight: 50 }}>Поделиться карточкой на стене</Button>
				</Div>
			</Panel>
        );
    }
}
KitchenDetail.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	backkitchen: PropTypes.func.isRequired,
	share: PropTypes.func,
};


export default (KitchenDetail);
