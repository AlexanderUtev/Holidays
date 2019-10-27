import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, Group, Button, Div, platform, HeaderButton, IOS, Link} from '@vkontakte/vkui';
import connect from '@vkontakte/vkui-connect';
import '@vkontakte/vkui/dist/vkui.css';
import vkuiConnect from '@vkontakte/vkui-connect';



import recipes_dessert from '../category_menu/recipes_dessert/recipes_dessert.json';
import './styles.css';



import Icon24Document from '@vkontakte/icons/dist/24/document';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon24Reply from '@vkontakte/icons/dist/24/reply';




class RecipeDetail_dessert extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			recipeText: null,
			activeStory: "home",
			check: false,
			activePanel: 'feed',
            history: ['feed'],
			page: this.props.recipes_desserttartId
		};
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

	  go = (e) => { 
		this.setState({ activePanel: e.currentTarget.dataset.to })
		};
		
		backkitchen = (e) => { 
			this.setState({ activeStory: e.currentTarget.dataset.to })
			window.scrollTo(0,0)
		}

	getrecipes_dessertText = (id,glava) => {
		console.log(require("../category_menu/recipes_dessert"+recipes_dessert[id].preview))
		fetch(require("../category_menu/recipes_dessert/content"+require("../category_menu/recipes_dessert"+recipes_dessert[id].preview)[glava].text))
		.then(text => text.text())
		.then(data => {this.setState({recipeText: data})})
		this.setState({page: glava, check: true})
		let status = window.navigator.onLine ? true : false;
if(!status) {alert("Проверьте интернет соединение.\n Повторите попытку");}
	}


	share = () => {
		connect.send("VKWebAppShowWallPostBox", {"message": `${recipes_dessert[this.props.recipeId].title}.\n\n${recipes_dessert[this.props.recipeId].kitchen} кухня.\n\nПримерное время готовки: ${recipes_dessert[this.props.recipeId].time}.\n\nИнгредиенты:\n${recipes_dessert[this.props.recipeId].text_ingr}\n\nИнструкция приготовления:\n${recipes_dessert[this.props.recipeId].text_instrukcia}\n\n${recipes_dessert[this.props.recipeId].tags}\n\nБольше рецептов тут - https://vk.com/app7144202`, "attachments": "https://vk.com/app7144202"});
	}

	
	
	render () {
		const osname = platform();
		return (
			<Panel id={this.props.id}>
				<PanelHeader
			left={<HeaderButton onClick={this.props.go} data-to="dessert">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>
			{recipes_dessert[this.props.recipeId].title}
		</PanelHeader>
		                <img alt={recipes_dessert[this.props.recipeId].title} className="img" type="image" src={require("../category_menu/recipes_dessert"+recipes_dessert[this.props.recipeId].path)}/> 

						<Group className="Header__content" title="Информация о блюде">
						<Div>
                           <span className="Header__content" className="info">Категория: </span><span className="nackl" className="Header__content" className="noperenos"> {recipes_dessert[this.props.recipeId].categoryall}</span>
						   <br></br>
						   <br></br>
						   <span className="Header__content" className="info">Кухня: </span><span className="nackl" className="Header__content" className="noperenos"> {recipes_dessert[this.props.recipeId].kitchen}</span>
						   <br></br>
						   <br></br>
						   <span className="Header__content" className="info">Примерное время готовки: </span> <span className="Header__content" className="nackl" className="noperenos"> {recipes_dessert[this.props.recipeId].time}</span>
						   <br></br>
						   <br></br>
						   <span className="Header__content" className="info">Источник: </span> <span className="Header__content" className="nackl" className="noperenos"><Link href={recipes_dessert[this.props.recipeId].source} target='_blank'>{recipes_dessert[this.props.recipeId].source_text}</Link></span>
						   <br></br>
						   <br></br>
						   </Div>
						</Group>
				<Group>
					<Div className="ingr-text">
					<span className="Header__content" className="info">Ингредиенты: </span><span className="nackl" className="Header__content" className="noperenos"></span>
						   <br></br>
						   <br></br>
					{recipes_dessert[this.props.recipeId].text_ingr}
					</Div>
					</Group>
					<Group>
					<Div className="instrukcia-text">     
					<span className="Header__content" className="info">Инструкция приготовления: </span><span className="nackl" className="Header__content" className="noperenos"></span>
						   <br></br>
						   <br></br>
				    {recipes_dessert[this.props.recipeId].text_instrukcia}
					</Div>
				</Group>
				<Div>
				<Button before={<Icon24Reply/>} onClick={this.share} size="xl" level="secondary" stretched style={{ marginRight: 50 }}>Поделиться рецептом на стене</Button>
				</Div>			

			</Panel>
        );
    }
}
RecipeDetail_dessert.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};


export default (RecipeDetail_dessert);