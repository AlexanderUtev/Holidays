import React from 'react';
import { Epic, CellButton, File, Input, HeaderButton, Select, IOS, ANDROID, platform, Textarea, Checkbox, Switch, FormLayout, FormLayoutGroup, Separator, Footer, Panel, Tabbar, ConfigProvider, TabbarItem, PanelHeader, View, Group, HorizontalScroll, Tappable, Search, List, Cell, Button, Div, Link, Tooltip} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import vkuiConnect from '@vkontakte/vkui-connect';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import connect from '@vkontakte/vk-connect';


import RecipeDetail_first_meal from './RecipeDetail_first_meal';
import RecipeDetail_second_course from './RecipeDetail_second_course';
import RecipeDetail_dessert from './RecipeDetail_dessert';
import RecipeDetail_snacks from './RecipeDetail_snacks';
import RecipeDetail_salads from './RecipeDetail_salads';
import RecipeDetail_beverages from './RecipeDetail_beverages';
import RecipeDetail_sauces from './RecipeDetail_sauces';
import RecipeDetail_baking from './RecipeDetail_baking';
import RecipeDetail_cakes from './RecipeDetail_cakes';
import RecipeDetail_garnish from './RecipeDetail_garnish';
import RecipeDetail_easter from './RecipeDetail_easter';
import RecipeDetail_new_Year from './RecipeDetail_new_Year';

import KitchenDetail from './KitchenDetail';



import recipes_first_meal from '../category_menu/recipes_first_meal/recipes_first_meal.json';
import recipes_second_course from '../category_menu/recipes_second_course/recipes_second_course.json';
import recipes_dessert from '../category_menu/recipes_dessert/recipes_dessert.json';
import recipes_snacks from '../category_menu/recipes_snacks/recipes_snacks.json';
import recipes_salads from '../category_menu/recipes_salads/recipes_salads.json';
import recipes_beverages from '../category_menu/recipes_beverages/recipes_beverages.json';
import recipes_sauces from '../category_menu/recipes_sauces/recipes_sauces.json';
import recipes_baking from '../category_menu/recipes_baking/recipes_baking.json';
import recipes_cakes from '../category_menu/recipes_cakes/recipes_cakes.json';
import recipes_garnish from '../category_menu/recipes_garnish/recipes_garnish.json';
import recipes_easter from '../category_menu/recipes_easter/recipes_easter.json';
import recipes_new_Year from '../category_menu/recipes_new_Year/recipes_new_Year.json';

import kitchen from '../kitchen/kitchen.json';

import './styles.css';


// ФОТО
import CookingLogo from '../img/CookingLogo.png';
import path1 from '../category_menu/img/1.jpg'
import path2 from '../category_menu/img/2.jpg'
import path3 from '../category_menu/img/3.jpg'
import path4 from '../category_menu/img/4.jpg'
import path5 from '../category_menu/img/5.jpg'
import path6 from '../category_menu/img/6.jpg'
import path7 from '../category_menu/img/7.jpg'
import path8 from '../category_menu/img/8.jpg'
import path9 from '../category_menu/img/9.jpg'
import path10 from '../category_menu/img/10.jpg'
import path11 from '../category_menu/img/11.jpg'
import path12 from '../category_menu/img/12.jpg'
import path13 from '../category_menu/img/13.jpg'

import path1_1 from '../category_menu/img/1_1.jpg'
import path2_2 from '../category_menu/img/2_2.jpg'
import path3_3 from '../category_menu/img/3_3.jpg'
import path4_4 from '../category_menu/img/4_4.jpg'
import path5_5 from '../category_menu/img/5_5.jpg'
import path6_6 from '../category_menu/img/6_6.jpg'
import path7_7 from '../category_menu/img/7_7.jpg'
import path8_8 from '../category_menu/img/8_8.jpg'
import path9_9 from '../category_menu/img/9_9.jpg'
import path10_10 from '../category_menu/img/10_10.jpg'
import path11_11 from '../category_menu/img/11_11.jpg'
import path12_12 from '../category_menu/img/12_12.jpg'
import path13_13 from '../category_menu/img/13_13.jpg'




// ИКОНКИ НА 28
import Icon28Message from '@vkontakte/icons/dist/28/message';
import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon28Write from '@vkontakte/icons/dist/28/write';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

// ИКОНКИ НА 24
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24List from '@vkontakte/icons/dist/24/list';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';
import Icon24Message from '@vkontakte/icons/dist/24/message';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24Privacy from '@vkontakte/icons/dist/24/privacy';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon24Mention from '@vkontakte/icons/dist/24/mention';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import Icon24Video from '@vkontakte/icons/dist/24/video';

// ИКОНКИ НА 20
import Icon20LikeOutline from '@vkontakte/icons/dist/20/like_outline';






const osName = platform();

const recipe_first_meal = Object.keys(recipes_first_meal).map(i => {
	return recipes_first_meal[i];
	})

const recipe_second_course = Object.keys(recipes_second_course).map(i => {
	return recipes_second_course[i];
	})

const recipe_dessert = Object.keys(recipes_dessert).map(i => {
	return recipes_dessert[i];
	})

const recipe_snacks = Object.keys(recipes_snacks).map(i => {
	return recipes_snacks[i];
	})

const recipe_salads = Object.keys(recipes_salads).map(i => {
	return recipes_salads[i];
	})

const recipe_beverages = Object.keys(recipes_beverages).map(i => {
	return recipes_beverages[i];
	})

const recipe_sauces = Object.keys(recipes_sauces).map(i => {
	return recipes_sauces[i];
	})

const recipe_baking = Object.keys(recipes_baking).map(i => {
	return recipes_baking[i];
	})

const recipe_cakes = Object.keys(recipes_cakes).map(i => {
	return recipes_cakes[i];
	})

const recipe_garnish = Object.keys(recipes_garnish).map(i => {
	return recipes_garnish[i];
	})

const recipe_easter = Object.keys(recipes_easter).map(i => {
	return recipes_easter[i];
	})

const recipe_new_Year = Object.keys(recipes_new_Year).map(i => {
	return recipes_new_Year[i];
	})





class Home  extends React.Component {
	constructor (props) {
	  super(props);

	  	const URL = new URLSearchParams(window.location.search);

	  	if(URL.get('vk_platform') === 'desktop_web') {
			this.showTool = true;
		} else {
			this.showTool = false;
		}

		this.state = {
			activeStory: 'recipes',
			recipeId: null,
			popout: null,
			search: '',
			contextOpened: true,
			mode: 'all',
			activePanel: 'feed',
			history: ['feed'],
			showTool: this.showTool
		};
		this.onChange = this.onChange.bind(this);
		this.onStoryChange = this.onStoryChange.bind(this);
	  this.toggleContext = this.toggleContext.bind(this);
    this.select = this.select.bind(this);
  }

	componentDidMount() {
		window.addEventListener('popstate', e => e.preventDefault() & this.menu(e));
		window.history.pushState( { panel: 'home' }, `home` );
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
	menu (e) {
		if(e.state) {
			this.setState( { activePanel: e.state.panel } );
		} else {
			this.setState( { activePanel: 'home', search: '' } );
			window.history.pushState( { panel: 'home' }, `home` );
		}
	}

	goForward = (activePanel) => {
    const history = [...this.state.history];
    history.push(activePanel);
    if (this.state.activePanel === 'feed') {
      vkuiConnect.send('VKWebAppEnableSwipeBack');
    }
    this.setState({ history, activePanel });
  }



	toggleContext () {
		this.setState({ contextOpened: !this.state.contextOpened });
	  }

	select (e) {
		const mode = e.currentTarget.dataset.mode;
		this.setState({ mode });
		requestAnimationFrame(this.toggleContext);
	  }


	onChange (search) { this.setState({ search }); }

	get recipe_first_meal () {
		const search = this.state.search.toLowerCase();
		return recipe_first_meal.filter(({forpoisk}) => forpoisk.toLowerCase().indexOf(search) > -1);
	}

	get recipe_second_course () {
		const search = this.state.search.toLowerCase();
		return recipe_second_course.filter(({forpoisk}) => forpoisk.toLowerCase().indexOf(search) > -1);
	}

	get recipe_dessert () {
		const search = this.state.search.toLowerCase();
		return recipe_dessert.filter(({forpoisk}) => forpoisk.toLowerCase().indexOf(search) > -1);
	}

	get recipe_snacks () {
		const search = this.state.search.toLowerCase();
		return recipe_snacks.filter(({forpoisk}) => forpoisk.toLowerCase().indexOf(search) > -1);
	}

	get recipe_salads () {
		const search = this.state.search.toLowerCase();
		return recipe_salads.filter(({forpoisk}) => forpoisk.toLowerCase().indexOf(search) > -1);
	}

	get recipe_beverages () {
		const search = this.state.search.toLowerCase();
		return recipe_beverages.filter(({forpoisk}) => forpoisk.toLowerCase().indexOf(search) > -1);
	}

	get recipe_sauces () {
		const search = this.state.search.toLowerCase();
		return recipe_sauces.filter(({forpoisk}) => forpoisk.toLowerCase().indexOf(search) > -1);
	}

	get recipe_baking () {
		const search = this.state.search.toLowerCase();
		return recipe_baking.filter(({forpoisk}) => forpoisk.toLowerCase().indexOf(search) > -1);
	}

	get recipe_cakes () {
		const search = this.state.search.toLowerCase();
		return recipe_cakes.filter(({forpoisk}) => forpoisk.toLowerCase().indexOf(search) > -1);
	}

	get recipe_garnish () {
		const search = this.state.search.toLowerCase();
		return recipe_garnish.filter(({forpoisk}) => forpoisk.toLowerCase().indexOf(search) > -1);
	}

	get recipe_easter () {
		const search = this.state.search.toLowerCase();
		return recipe_easter.filter(({forpoisk}) => forpoisk.toLowerCase().indexOf(search) > -1);
	}

	get recipe_new_Year () {
		const search = this.state.search.toLowerCase();
		return recipe_new_Year.filter(({forpoisk}) => forpoisk.toLowerCase().indexOf(search) > -1);
	}


	go = (e) => {

		this.setState({ activeStory: e.currentTarget.dataset.to });
		window.history.pushState( { panel: e.currentTarget.dataset.to }, e.currentTarget.dataset.to );
	}

	eruda = async () => {
        await this.setState({eruda: !this.state.eruda})
              this.state.eruda ? window.eruda.init() : window.eruda.destroy()
    }

	backkitchen = (e) => {
		this.setState({ activeStory: e.currentTarget.dataset.to })
		window.scrollTo(0,0)
	}

	onStoryChange (e) {
		this.setState({ activeStory: e.currentTarget.dataset.story })
		window.scrollTo(0,0)
	}

	selectrecipe_first_meal = id => {
		this.setState({ recipeId: id, activeStory: "recipeDetail_first_meal"})
		window.scrollTo(0,0)
	}

	selectrecipe_second_course = id => {
		this.setState({ recipeId: id, activeStory: "recipeDetail_second_course"})
		window.scrollTo(0,0)
	}

	selectrecipe_dessert = id => {
		this.setState({ recipeId: id, activeStory: "recipeDetail_dessert"})
		window.scrollTo(0,0)
	}

	selectrecipe_snacks = id => {
		this.setState({ recipeId: id, activeStory: "recipeDetail_snacks"})
		window.scrollTo(0,0)
	}

	selectrecipe_salads = id => {
		this.setState({ recipeId: id, activeStory: "recipeDetail_salads"})
		window.scrollTo(0,0)
	}

	selectrecipe_beverages = id => {
		this.setState({ recipeId: id, activeStory: "recipeDetail_beverages"})
		window.scrollTo(0,0)
	}

	selectrecipe_sauces = id => {
		this.setState({ recipeId: id, activeStory: "recipeDetail_sauces"})
		window.scrollTo(0,0)
	}

	selectrecipe_baking = id => {
		this.setState({ recipeId: id, activeStory: "recipeDetail_baking"})
		window.scrollTo(0,0)
	}

	selectrecipe_cakes = id => {
		this.setState({ recipeId: id, activeStory: "recipeDetail_cakes"})
		window.scrollTo(0,0)
	}

	selectrecipe_garnish = id => {
		this.setState({ recipeId: id, activeStory: "recipeDetail_garnish"})
		window.scrollTo(0,0)
	}

	selectrecipe_easter = id => {
		this.setState({ recipeId: id, activeStory: "recipeDetail_easter"})
		window.scrollTo(0,0)
	}

	selectrecipe_new_Year = id => {
		this.setState({ recipeId: id, activeStory: "recipeDetail_new_Year"})
		window.scrollTo(0,0)
	}

	selectKitchen = id => {
		this.setState({ recipeId: id, activeStory: "kitchenDetail"})
		window.scrollTo(0,0)
	}



	render () {
				const osname = platform();
		return (
			<Epic activeStory={this.state.activeStory} tabbar={
				this.state.activeStory !== 'recipeDetail_first_meal' &&
				this.state.activeStory !== 'recipeDetail_second_course' &&
				this.state.activeStory !== 'recipeDetail_dessert' &&
     			this.state.activeStory !== 'recipeDetail_snacks' &&
     			this.state.activeStory !== 'recipeDetail_salads' &&
     			this.state.activeStory !== 'recipeDetail_beverages' &&
     			this.state.activeStory !== 'recipeDetail_sauces' &&
     			this.state.activeStory !== 'recipeDetail_baking' &&
     			this.state.activeStory !== 'recipeDetail_cakes' &&
     			this.state.activeStory !== 'recipeDetail_garnish' &&
     			this.state.activeStory !== 'recipeDetail_easter' &&
     			this.state.activeStory !== 'recipeDetail_new_Year' &&

				this.state.activeStory !== 'kitchenDetail' &&
			<Tabbar>



            <TabbarItem
                onClick={this.onStoryChange}
                selected={this.state.activeStory !== 'discover' && this.state.activeStory !== 'info'}
                data-story="recipes"
                text="Рецепты"><Icon28More />
            </TabbarItem>

            <TabbarItem
				onClick={this.onStoryChange}
				selected={this.state.activeStory === 'discover'}
				data-story="discover"
				text="Поиск"><Icon24Search/>
			</TabbarItem>

            <TabbarItem
                onClick={this.onStoryChange}
                selected={this.state.activeStory === 'info'}
                data-story="info"
                text="О нас"><Icon28InfoOutline />
            </TabbarItem>

			</Tabbar>
		}>







            <View id="feed" activePanel="feed" >
			<Panel id="feed">
				<PanelHeader>Лента</PanelHeader>
				        <Group><Div style={{ paddingTop: 5, paddingBottom: 5, color: 'green', textAlign: "center" }}>
                                <h1>В разработке!</h1>
                        </Div></Group>

                        <Group>
                            <Div>
                                {this.props.walls ? this.props.walls.map((e,i) => {
                                return(
                            <div>
                                {e.text ? <div>
                                {e.text.split("\n")[0]}
                            <div style={{display: 'flex'}}>
                                <Icon20LikeOutline/> {e.likes.count}
                            </div>
                                {i == this.props.walls.length-1 ? '' : <Separator/>}
                            </div> : ''}
                            </div>
                                      )
                                })
                                : "Тут отображаются посты, опубликованные на стене сообщества!"}
                            </Div>
                        </Group>

			</Panel>
			</View>










			<View id="recipes" activePanel="recipes" >
			<Panel id="recipes">
				<PanelHeader>Рецепты</PanelHeader>

			{this.showTool &&
				<Tooltip
					style={{ width: "300%" }}
					title="Подсказка!"
					text="Для прокрутки с web-версии зажмите SHIFT и крутите колесико!"
					isShown={this.state.tooltip}
					onClose={() => this.setState({ tooltip: false })}
					offsetX={10}
					offsetY={-270}
					cornerOffset={0}
            	>
					<Group className="Header__content" title="Кухни">
						<HorizontalScroll style={{ padding: '0px 2px'}} children={''}>
							<div className="scroll" style={{ display: 'flex' }}>
								{
									Object.keys(kitchen).map(i =>
										<Tappable
											onClick={() => this.selectKitchen(i)}
											style={{borderRadius: 15, margin: 2}}
										>
											<div style={{ padding: 7, width: 150 }}>
											<img alt={kitchen[i].title} className="ico-top" type="image" src={require("../kitchen"+kitchen[i].path)}/>
											</div>
											<div className="center">{kitchen[i].title}</div>
											<div> </div>
										</Tappable>
									)
								}
							</div>
						</HorizontalScroll>
					</Group>
				</Tooltip>
			}

			{!this.showTool &&
				<Group className="Header__content" title="Кухни">
					<HorizontalScroll style={{ padding: '0px 2px'}} children={''}>
						<div className="scroll" style={{ display: 'flex' }}>
							{
								Object.keys(kitchen).map(i =>
									<Tappable
										onClick={() => this.selectKitchen(i)}
										style={{borderRadius: 15, margin: 2}}
									>
										<div style={{ padding: 7, width: 150 }}>
										<img alt={kitchen[i].title} className="ico-top" type="image" src={require("../kitchen"+kitchen[i].path)}/>
										</div>
										<div className="center">{kitchen[i].title}</div>
										<div> </div>
									</Tappable>
								)
							}
						</div>
					</HorizontalScroll>
		    	</Group>
			}














		    <Group className="Header__content" title="Категории">
		          <div className="category-div">



		                <Tappable className="category-child"
		                onClick={this.go} data-to="first_meal"
		                style={{borderRadius:30, margin: 2, width: 170}}>
		                <figure>
		                <img alt="Первые блюда" className="ico-top-category" src={path1}/>
		                <br></br><br></br>
		                <figcaption> <div className="center">Первые блюда</div></figcaption>
		                </figure></Tappable>

		                <Tappable className="category-child"
		                onClick={this.go} data-to="second_course"
		                style={{borderRadius:30, margin: 2, width: 170}}>
		                <figure>
		                <img alt="Вторые блюда" className="ico-top-category" src={path2}/>
		                <br></br><br></br>
		                <figcaption> <div className="center">Вторые блюда</div></figcaption>
		                </figure></Tappable>

		                <Tappable className="category-child"
		                onClick={this.go} data-to="dessert"
		                style={{borderRadius:30, margin: 2, width: 170}}>
		                <figure>
		                <img alt="Десерты" className="ico-top-category" src={path3}/>
		                <br></br><br></br>
		                <figcaption> <div className="center">Десерты</div></figcaption>
		                </figure></Tappable>

		                <Tappable className="category-child"
		                onClick={this.go} data-to="snacks"
		                style={{borderRadius:30, margin: 2, width: 170}}>
		                <figure>
		                <img alt="Закуски" className="ico-top-category" src={path4}/>
		                <br></br><br></br>
		                <figcaption> <div className="center">Закуски</div></figcaption>
		                </figure></Tappable>

		                <Tappable className="category-child"
		                onClick={this.go} data-to="salads"
		                style={{borderRadius:30, margin: 2, width: 170}}>
		                <figure>
		                <img alt="Салаты" className="ico-top-category" src={path5}/>
		                <br></br><br></br>
		                <figcaption> <div className="center">Салаты</div></figcaption>
		                </figure></Tappable>

		                <Tappable className="category-child"
		                onClick={this.go} data-to="beverages"
		                style={{borderRadius:30, margin: 2, width: 170}}>
		                <figure>
		                <img alt="Напитки" className="ico-top-category" src={path6}/>
		                <br></br><br></br>
		                <figcaption> <div className="center">Напитки</div></figcaption>
		                </figure></Tappable>

		                <Tappable className="category-child"
		                onClick={this.go} data-to="sauces"
		                style={{borderRadius:30, margin: 2, width: 170}}>
		                <figure>
		                <img alt="Соусы, кремы" className="ico-top-category" src={path7}/>
		                <br></br><br></br>
		                <figcaption> <div className="center">Соусы, кремы</div></figcaption>
		                </figure></Tappable>

		                <Tappable className="category-child"
		                onClick={this.go} data-to="baking"
		                style={{borderRadius:30, margin: 2, width: 170}}>
		                <figure>
		                <img alt="Выпечка" className="ico-top-category" src={path8}/>
		                <br></br><br></br>
		                <figcaption> <div className="center">Выпечка</div></figcaption>
		                </figure></Tappable>

		                <Tappable className="category-child"
		                onClick={this.go} data-to="cakes"
		                style={{borderRadius:30, margin: 2, width: 170}}>
		                <figure>
		                <img alt="Торты" className="ico-top-category" src={path9}/>
		                <br></br><br></br>
		                <figcaption> <div className="center">Торты</div></figcaption>
		                </figure></Tappable>

		                <Tappable className="category-child"
		                onClick={this.go} data-to="garnish"
		                style={{borderRadius:30, margin: 2, width: 170}}>
		                <figure>
		                <img alt="Гарниры" className="ico-top-category" src={path10}/>
		                <br></br><br></br>
		                <figcaption> <div className="center">Гарниры</div></figcaption>
		                </figure></Tappable>



		          </div>
		    </Group>













			 <Group className="Header__content" title="Тематические категории">
		          <div className="category-div">



						<HorizontalScroll style={{ padding: '0px 2px'}} children={''}>
							<div style={{ display: 'flex' }}>
		                <Tappable className="category-child"
		                onClick={this.go} data-to="easter"
		                style={{borderRadius:30, margin: 2, width: 170}}>
		                <figure>
		                <img alt="Пасха" className="ico-top-category" src={path11}/>
		                <br></br><br></br>
		                <figcaption> <div className="center">Пасха</div></figcaption>
		                </figure></Tappable>

		                <Tappable className="category-child"
		                onClick={this.go} data-to="new_Year"
		                style={{borderRadius:30, margin: 2, width: 170}}>
		                <figure>
		                <img alt="Новый год" className="ico-top-category" src={path12}/>
		                <br></br><br></br>
		                <figcaption> <div className="center">Новый год</div></figcaption>
		                </figure></Tappable>


		                </div>
						</HorizontalScroll>


		          </div>
		    </Group>

			</Panel>
			</View>



			<View id="first_meal" activePanel="first_meal" >
			<Panel id="first_meal">
			<PanelHeader left={<HeaderButton onClick={() => this.this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Первые блюда</PanelHeader>
			<Group>
			<img alt="Первые блюда" className="Logo" src={path1_1}/>
			<Div>Суп (от фр. soupe) — блюдо, в составе которого содержится не менее 50 % жидкости.</Div>
			</Group>

			<Group title="Рецепты первых блюд" description={<div style={{userSelect: "none", textAlign: "center"}}></div>}>
					<List>
						{
							Object.keys(recipes_first_meal).map(i => <Cell
								onClick={() => this.selectrecipe_first_meal(i)}
								key={i}
								before={<div className="ico-align"><img alt={recipes_first_meal[i].title} className="ico-crop" type="image" src={require("../category_menu/recipes_first_meal"+recipes_first_meal[i].path)}/><br/></div>}
							>
							<span>{recipes_first_meal[i].title}</span>
							<span className="disable-selection text">Кухня: {recipes_first_meal[i].kitchen} </span>
							<span className="disable-selectionn text">Время: ~{recipes_first_meal[i].time}</span>
							</Cell>)
						}
					</List>
				</Group>
				<Div><Button before={<Icon24LogoVk/>} size="xl" level="secondary" component="a" href="https://vk.com/public184207972" target="_blank"> Сообщество</Button></Div>
					<br></br>


			</Panel>
			</View>

			<View id="second_course" activePanel="second_course" >
			<Panel id="second_course">
			<PanelHeader left={<HeaderButton onClick={() => this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Вторые блюда</PanelHeader>
			<Group>
		    <img alt="Вторые блюда" className="Logo" src={path2_2}/>
		    <Div>
                <input type="checkbox" className="read-more-state" id="post-1" />
                <p className="read-more-wrap">Главное блюдо [второе блюдо] (англ. main course) — основное блюдо, подаваемое во время приема пищи, состоящем из нескольких блюд.<span class="read-more-target"><p>Главное блюдо обычно самое тяжелое, горячее и самое сложное блюдо в меню. Основными ингредиентами являются мясо или рыба. В вегетарианской кухне роль главного играют блюда из бобовых. Главному блюду предшествует закуска, суп и(или) салат, а после него — десерт. По этим причинам, главное блюдо иногда называют «мясным блюдом».</p><p>На официальных обедах, хорошо спланированное главное блюдо может представлять гастрономическую вершину или кульминацию. В таком случае, предшествующие блюда подготавливают и ведут к основному блюду таким образом, что главное блюдо предвосхощается, и, при удачной схеме приема пищи, увеличивает удовольствие и наслаждение от обеда. Блюда, следующие за главным блюдом, успокаивают вкусовые ощущения и желудок.</p></span></p>
                <label htmlFor="post-1" className="read-more-trigger"></label>
            </Div>
			</Group>

			<Group title="Рецепты вторых блюд" description={<div style={{userSelect: "none", textAlign: "center"}}></div>}>
					<List>
						{
							Object.keys(recipes_second_course).map(i => <Cell
								onClick={() => this.selectrecipe_second_course(i)}
								key={i}
								before={<div className="ico-align"><img alt={recipes_second_course[i].title} className="ico-crop" type="image" src={require("../category_menu/recipes_second_course"+recipes_second_course[i].path)}/><br/></div>}
							>
							<span>{recipes_second_course[i].title}</span>
							<span className="disable-selection text">Кухня: {recipes_second_course[i].kitchen} </span>
							<span className="disable-selectionn text">Время: ~{recipes_second_course[i].time}</span>
							</Cell>)
						}
					</List>
				</Group>
				<Div><Button before={<Icon24LogoVk/>} size="xl" level="secondary" component="a" href="https://vk.com/public184207972" target="_blank"> Сообщество</Button></Div>
					<br></br>



			</Panel>
			</View>

			<View id="dessert" activePanel="dessert" >
			<Panel id="dessert">
			<PanelHeader left={<HeaderButton onClick={() => this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Десерты</PanelHeader>
			<Group>
			<img alt="Десерты" className="Logo" src={path3_3}/>
            <Div>
                <input type="checkbox" class="read-more-state" id="post-1" />
                <p class="read-more-wrap">Десерт (от фр. dessert) — завершающее блюдо стола, предназначенное для получения приятных вкусовых ощущений в конце обеда или ужина, обычно — сладкие деликатесы (не фрукты).<span class="read-more-target"><p>Десерты подаются обычно в специальных десертных тарелках. Едят, как правило, десертной ложкой — промежуточной по размеру между столовой и чайной. Десертный стол также сервируется десертным ножом и десертной вилкой.</p></span></p>
                <label for="post-1" class="read-more-trigger"></label>
            </Div>
            </Group>

			<Group title="Рецепты десертов" description={<div style={{userSelect: "none", textAlign: "center"}}></div>}>
					<List>
						{
							Object.keys(recipes_dessert).map(i => <Cell
								onClick={() => this.selectrecipe_dessert(i)}
								key={i}
								before={<div className="ico-align"><img alt={recipes_dessert[i].title} className="ico-crop" type="image" src={require("../category_menu/recipes_dessert"+recipes_dessert[i].path)}/><br/></div>}
							>
							<span>{recipes_dessert[i].title}</span>
							<span className="disable-selection text">Кухня: {recipes_dessert[i].kitchen} </span>
							<span className="disable-selectionn text">Время: ~{recipes_dessert[i].time}</span>
							</Cell>)
						}
					</List>
				</Group>
				<Div><Button before={<Icon24LogoVk/>} size="xl" level="secondary" component="a" href="https://vk.com/public184207972" target="_blank"> Сообщество</Button></Div>
					<br></br>


			</Panel>
			</View>

			<View id="snacks" activePanel="snacks" >
			<Panel id="snacks">
			<PanelHeader left={<HeaderButton onClick={() => this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Закуски</PanelHeader>
			<Group>
			<img alt="Закуски" className="Logo" src={path4_4}/>
			<Div>Закуска — еда, которая подаётся перед основными блюдами либо в качестве отдельной лёгкой трапезы. Закуска часто употребляется вместе со спиртными напитками.</Div>
			</Group>


			<Group title="Рецепты закусок" description={<div style={{userSelect: "none", textAlign: "center"}}></div>}>
					<List>
						{
							Object.keys(recipes_snacks).map(i => <Cell
								onClick={() => this.selectrecipe_snacks(i)}
								key={i}
								before={<div className="ico-align"><img alt={recipes_snacks[i].title} className="ico-crop" type="image" src={require("../category_menu/recipes_snacks"+recipes_snacks[i].path)}/><br/></div>}
							>
							<span>{recipes_snacks[i].title}</span>
							<span className="disable-selection text">Кухня: {recipes_snacks[i].kitchen} </span>
							<span className="disable-selectionn text">Время: ~{recipes_snacks[i].time}</span>
							</Cell>)
						}
					</List>
				</Group>
				<Div><Button before={<Icon24LogoVk/>} size="xl" level="secondary" component="a" href="https://vk.com/public184207972" target="_blank"> Сообщество</Button></Div>
					<br></br>


			</Panel>
			</View>

			<View id="salads" activePanel="salads" >
			<Panel id="salads">
			<PanelHeader left={<HeaderButton onClick={() => this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Салаты</PanelHeader>
			<Group>
			<img alt="Салаты" className="Logo" src={path5_5}/>
			<Div>
                <input type="checkbox" class="read-more-state" id="post-1" />
                <p class="read-more-wrap">Салат (итал. Salato, Salata — «солёное») — в классической рецептуре холодное блюдо, приготавливаемое из смеси различных овощей и/или фруктов.<span class="read-more-target"><p>(собственно листья салата, корнеплоды, грибы, картофель, огурцы, бобы, зелёные листья эндивия, водяного кресса, рапунцеля и т. п.) с приправой уксусом, растительным маслом, майонезом, сметаной, лимонным соком, солью, перцем или специальными салатными заправками; подаётся большей частью к жареному мясу, иногда в виде закуски. Часто в состав салатов входит зелень: укроп, петрушка, сельдерей, зелёный лук, чеснок.</p></span></p>
                <label for="post-1" class="read-more-trigger"></label>
            </Div>
			</Group>


			<Group title="Рецепты салатов" description={<div style={{userSelect: "none", textAlign: "center"}}></div>}>
<Div>На данный момент в этой категории нет рецептов.</Div>

					<List>
						{
							Object.keys(recipes_salads).map(i => <Cell
								onClick={() => this.selectrecipe_salads(i)}
								key={i}
								before={<div className="ico-align"><img alt={recipes_salads[i].title} className="ico-crop" type="image" src={require("../category_menu/recipes_salads"+recipes_salads[i].path)}/><br/></div>}
							>
							<span>{recipes_salads[i].title}</span>
							<span className="disable-selection text">Кухня: {recipes_salads[i].kitchen} </span>
							<span className="disable-selectionn text">Время: ~{recipes_salads[i].time}</span>
							</Cell>)
						}
					</List>
				</Group>
				<Div><Button before={<Icon24LogoVk/>} size="xl" level="secondary" component="a" href="https://vk.com/public184207972" target="_blank"> Сообщество</Button></Div>
					<br></br>


			</Panel>
			</View>

			<View id="beverages" activePanel="beverages" >
			<Panel id="beverages">
			<PanelHeader left={<HeaderButton onClick={() => this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Напитки</PanelHeader>
			<Group>
			<img alt="Напитки" className="Logo" src={path6_6}/>
			<Div>Напиток — жидкость, специально приготовленная для питья.</Div>
			</Group>

			<Group title="Рецепты напитков" description={<div style={{userSelect: "none", textAlign: "center"}}></div>}>
<Div>На данный момент в этой категории нет рецептов.</Div>
					<List>
						{
							Object.keys(recipes_beverages).map(i => <Cell
								onClick={() => this.selectrecipe_beverages(i)}
								key={i}
								before={<div className="ico-align"><img alt={recipes_beverages[i].title} className="ico-crop" type="image" src={require("../category_menu/recipes_beverages"+recipes_beverages[i].path)}/><br/></div>}
							>
							<span>{recipes_beverages[i].title}</span>
							<span className="disable-selection text">Кухня: {recipes_beverages[i].kitchen} </span>
							<span className="disable-selectionn text">Время: ~{recipes_beverages[i].time}</span>
							</Cell>)
						}
					</List>
				</Group>
				<Div><Button before={<Icon24LogoVk/>} size="xl" level="secondary" component="a" href="https://vk.com/public184207972" target="_blank"> Сообщество</Button></Div>
					<br></br>


			</Panel>
			</View>

			<View id="sauces" activePanel="sauces" >
			<Panel id="sauces">
			<PanelHeader left={<HeaderButton onClick={() => this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Соусы, кремы</PanelHeader>
			<Group>
			<img alt="Соусы, кремы" className="Logo" src={path7_7}/>
			<Div>
                <input type="checkbox" class="read-more-state" id="post-1" />
                <p class="read-more-wrap">Соус (от фр. sauce — подливка) — жидкая приправа к основному блюду и/или гарниру. Соусы придают более сочную консистенцию блюдам и повышают их калорийность.<span class="read-more-target"><p>Многие соусы содержат специи и вкусовые вещества, которые действуют возбуждающе на органы пищеварения; яркая окраска соусов выгодно оттеняет цвета основных продуктов блюда.</p><p>Подливы могут быть и к сладким блюдам, к примеру сметана, или полужидкий кисель к сырникам, оладьям.</p><p>Соусы не только подают к готовым блюдам, но и используют в процессе их приготовления: многие продукты жарят в соусе или запекают под соусом. Специализированный сосуд для хранения соусов называется соусник.</p><p>Широко распространённые соусы: кетчуп, майонез, соевый соус, бешамель, ткемали, сацебели, сальса, рыбный соус, чесночный соус, грибной соус, тартар, Тысяча островов.</p><p>Собственно слово соус восходит к лат. salsus — «посоленый» (ср. «сальса»). К эпохе античного Рима относится и один из первых общеизвестных соусов — гарум.</p><p>Крем — паста из сливок или сливочного масла c сахаром, используемая в качестве начинки и для украшения тортов и пирожных. Вместо масла может использоваться маргарин, а в качестве дополнительных ингредиентов — яйца, молоко, а также различные вкусовые и ароматические добавки: порошок какао, ваниль, и т.д.</p></span></p>
                <label for="post-1" class="read-more-trigger"></label>
            </Div>
			</Group>

			<Group title="Рецепты соусов, кремов" description={<div style={{userSelect: "none", textAlign: "center"}}></div>}>
<Div>На данный момент в этой категории нет рецептов.</Div>
					<List>
						{
							Object.keys(recipes_sauces).map(i => <Cell
								onClick={() => this.selectrecipe_sauces(i)}
								key={i}
								before={<div className="ico-align"><img alt={recipes_sauces[i].title} className="ico-crop" type="image" src={require("../category_menu/recipes_sauces"+recipes_sauces[i].path)}/><br/></div>}
							>
							<span>{recipes_sauces[i].title}</span>
							<span className="disable-selection text">Кухня: {recipes_sauces[i].kitchen} </span>
							<span className="disable-selectionn text">Время: ~{recipes_sauces[i].time}</span>
							</Cell>)
						}
					</List>
				</Group>
				<Div><Button before={<Icon24LogoVk/>} size="xl" level="secondary" component="a" href="https://vk.com/public184207972" target="_blank"> Сообщество</Button></Div>
					<br></br>


			</Panel>
			</View>

			<View id="baking" activePanel="baking" >
			<Panel id="baking">
			<PanelHeader left={<HeaderButton onClick={() => this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Выпечка</PanelHeader>
			<Group>
			<img alt="Выпечка" className="Logo" src={path8_8}/>
			<Div>
            <input type="checkbox" class="read-more-state" id="post-1" />
            <p class="read-more-wrap">Выпечка — общее название для хлебобулочных изделий и кондитерских изделий, изготавливаемых методом выпекания, а также сам этот процесс.<span class="read-more-target"><p>Мелкоштучные хлебобулочные изделия включают в себя выпечку преимущественно из хлебного теста весом до 250 граммов. Это булочки, рогалики, круассаны.</p><p>Кондитерские изделия выполняются из других видов теста, преимущественно с добавлением жиров и сахара. Сюда также относятся и несладкие изделия с длительным сроком хранения (галеты, крекеры, солёные палочки, брецели). Классическими видами кондитерских изделий являются печенье, пироги и торты.</p><p>В старину у многих народов именно по мастерству приготовления выпечки оценивалась готовность женщины вступить в брак. Значительная доля хлебобулочных изделий производится в домашних хозяйствах и на производствах малых форм — в пекарнях, булочно-кондитерских лавках, кафе. Механизированное хлебопечение на хлебозаводах характерно в большей степени для СССР и стран постсоветского пространства, промышленный выпуск других категорий хлебобулочных изделий (прежде всего, хлебных закусок и мучнистых кондитерских изделий) характерен для большинства индустриально развитых стран.</p></span></p>
            <label for="post-1" class="read-more-trigger"></label>
            </Div>
			</Group>

			<Group title="Рецепты выпечки" description={<div style={{userSelect: "none", textAlign: "center"}}></div>}>
<Div>На данный момент в этой категории нет рецептов.</Div>
					<List>
						{
							Object.keys(recipes_baking).map(i => <Cell
								onClick={() => this.selectrecipe_baking(i)}
								key={i}
								before={<div className="ico-align"><img alt={recipes_baking[i].title} className="ico-crop" type="image" src={require("../category_menu/recipes_baking"+recipes_baking[i].path)}/><br/></div>}
							>
							<span>{recipes_baking[i].title}</span>
							<span className="disable-selection text">Кухня: {recipes_baking[i].kitchen} </span>
							<span className="disable-selectionn text">Время: ~{recipes_baking[i].time}</span>
							</Cell>)
						}
					</List>
				</Group>
				<Div><Button before={<Icon24LogoVk/>} size="xl" level="secondary" component="a" href="https://vk.com/public184207972" target="_blank"> Сообщество</Button></Div>
					<br></br>


			</Panel>
			</View>

			<View id="cakes" activePanel="cakes" >
			<Panel id="cakes">
			<PanelHeader left={<HeaderButton onClick={() => this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Торты</PanelHeader>
			<Group>
			<img alt="Торты" className="Logo" src={path9_9}/>
			<Div>
            <input type="checkbox" class="read-more-state" id="post-1" />
            <p class="read-more-wrap">Торт (от итал. torta/лат. tōrta, круглый хлеб) — десерт, состоящий из одного или нескольких коржей, пропитанных кремом или джемом. Сверху торт обычно украшают кремом, глазурью или фруктами.<span class="read-more-target"><p>Существуют также несладкие разновидности тортов (например, печёночный торт), при этом название «торт» указывает скорее на оформление блюда: укладывание ингредиентов слоями с возможным последующим украшением верхнего слоя. В примере с печёночным тортом: поджаренные лепёшки из печёночного фарша с прослойкой из майонеза, украшенные сверху зеленью.</p></span></p>
            <label for="post-1" class="read-more-trigger"></label>
            </Div>
			</Group>

			<Group title="Рецепты тортов" description={<div style={{userSelect: "none", textAlign: "center"}}></div>}>
<Div>На данный момент в этой категории нет рецептов.</Div>
					<List>
						{
							Object.keys(recipes_cakes).map(i => <Cell
								onClick={() => this.selectrecipe_cakes(i)}
								key={i}
								before={<div className="ico-align"><img alt={recipes_cakes[i].title} className="ico-crop" type="image" src={require("../category_menu/recipes_cakes"+recipes_cakes[i].path)}/><br/></div>}
							>
							<span>{recipes_cakes[i].title}</span>
							<span className="disable-selection text">Кухня: {recipes_cakes[i].kitchen} </span>
							<span className="disable-selectionn text">Время: ~{recipes_cakes[i].time}</span>
							</Cell>)
						}
					</List>
				</Group>
				<Div><Button before={<Icon24LogoVk/>} size="xl" level="secondary" component="a" href="https://vk.com/public184207972" target="_blank"> Сообщество</Button></Div>
					<br></br>


			</Panel>
			</View>

			<View id="garnish" activePanel="garnish" >
			<Panel id="garnish">
			<PanelHeader left={<HeaderButton onClick={() => this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Гарниры</PanelHeader>
			<Group>
			<img alt="Гарниры" className="Logo" src={path10_10}/>
			<Div>
            <input type="checkbox" class="read-more-state" id="post-1" />
            <p class="read-more-wrap">Гарнир (фр. garnir — снабжать, украшать) — дополнительные компоненты к основной части блюда, предназначенные для его украшения, увеличения питательной и вкусовой ценности.<span class="read-more-target"><p>Гарниром могут быть любые продукты, в зависимости от того, что в блюде считается основным компонентом. В России гарниром принято называть дополнения к мясным или рыбным продуктам в виде круп, макаронных изделий, овощей и т. д. Классическая французская кухня также подразумевает любое дополнение, в том числе овощи, картофель. В европейской кухне используют также салат, хлеб, не менее популярны рис и кускус, которые дополняют обеды с блюдами восточной кухни.</p></span></p>
            <label for="post-1" class="read-more-trigger"></label>
            </Div>
			</Group>

			<Group title="Рецепты гарниров" description={<div style={{userSelect: "none", textAlign: "center"}}></div>}>
<Div>На данный момент в этой категории нет рецептов.</Div>
					<List>
						{
							Object.keys(recipes_garnish).map(i => <Cell
								onClick={() => this.selectrecipe_garnish(i)}
								key={i}
								before={<div className="ico-align"><img alt={recipes_garnish[i].title} className="ico-crop" type="image" src={require("../category_menu/recipes_garnish"+recipes_garnish[i].path)}/><br/></div>}
							>
							<span>{recipes_garnish[i].title}</span>
							<span className="disable-selection text">Кухня: {recipes_garnish[i].kitchen} </span>
							<span className="disable-selectionn text">Время: ~{recipes_garnish[i].time}</span>
							</Cell>)
						}
					</List>
				</Group>
				<Div><Button before={<Icon24LogoVk/>} size="xl" level="secondary" component="a" href="https://vk.com/public184207972" target="_blank"> Сообщество</Button></Div>
					<br></br>


			</Panel>
			</View>

			<View id="easter" activePanel="easter" >
			<Panel id="easter">
			<PanelHeader left={<HeaderButton onClick={() => this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Пасха</PanelHeader>
			<Group>
			<img alt="Пасха" className="Logo" src={path11_11}/>
			<Div>
            <input type="checkbox" class="read-more-state" id="post-1" />
            <p class="read-more-wrap">Пасха (творожная пасха, паска) — особое блюдо из творога, которое по русской традиции готовится только один раз в году — на праздник Пасхи.<span class="read-more-target"><p>Обычай готовить творожную пасху известен в центральных и северных регионах России, тогда как на юге России и Украине пасхой или паской называют праздничный хлеб (кулич).</p><p>Оригинальная форма пасхи — усечённая пирамида, символизирующая Гроб Господень. Традиционно для приготовления пасхи использовалась специальная разборная деревянная форма — пасочница. В наши дни для этого часто используют и другую посуду; в России в продаже есть также пластмассовые пасочницы промышленного производства.</p><p>Деревянная пасочница делается из дощечек, на внутренней стороне которых вырезают буквы «ХВ», означающие приветствие «Христос Воскресе!», а также изображения креста, копья, трости, проросших зёрен, ростков и цветов — символов страдания и воскресения Иисуса Христа (иногда также голубя, символа Св. Духа). Эти рисунки и надпись потом отпечатываются на готовой пасхе. Две дощечки имеют ушки, а две другие — дырочки для ушек. Для большей прочности в отверстия ушек вставляются клинышки.</p></span></p>
            <label for="post-1" class="read-more-trigger"></label>
            </Div>
			</Group>

			<Group title="Рецепты пасхальных блюд" description={<div style={{userSelect: "none", textAlign: "center"}}></div>}>
<Div>На данный момент в этой категории нет рецептов.</Div>
					<List>
						{
							Object.keys(recipes_easter).map(i => <Cell
								onClick={() => this.selectrecipe_easter(i)}
								key={i}
								before={<div className="ico-align"><img alt={recipes_easter[i].title} className="ico-crop" type="image" src={require("../category_menu/recipes_easter"+recipes_easter[i].path)}/><br/></div>}
							>
							<span>{recipes_easter[i].title}</span>
							<span className="disable-selection text">Кухня: {recipes_easter[i].kitchen} </span>
							<span className="disable-selectionn text">Время: ~{recipes_easter[i].time}</span>
							</Cell>)
						}
					</List>
				</Group>
				<Div><Button before={<Icon24LogoVk/>} size="xl" level="secondary" component="a" href="https://vk.com/public184207972" target="_blank"> Сообщество</Button></Div>
					<br></br>


			</Panel>
			</View>

			<View id="new_Year" activePanel="new_Year" >
			<Panel id="new_Year">
			<PanelHeader left={<HeaderButton onClick={() => this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Новый год</PanelHeader>
			<Group>
			<img alt="Новый год" className="Logo" src={path12_12}/>
			<Div>
            <input type="checkbox" class="read-more-state" id="post-1" />
            <p class="read-more-wrap">Безусловно, в каждой семье есть свои традиции, но мы решили перечислить самые популярные и любимые с детства блюда, которые являются таким же атрибутом праздника, как и бой курантов.<span class="read-more-target"><p>Это: салат Оливье, селедка под шубой, бутерброды с красной рыбой и сливочным сыром, яйца с майонезом или красной икрой, заливная рыба, холодец, утка или курица, мясной рулет, буженина, торт Наполеон.</p><p>Новый год просто невозможно себе представить без мандаринов. Именно они, благодаря своему аромату, создают в доме неповторимую праздничную атмосферу. И уж тем более никакое новогоднее застолье не обходится без шампанского, ведь загадывать под бой курантов самое заветное желание, стоя с бокалом игристого вина — это неотъемлемая традиция Нового года.</p></span></p>
            <label for="post-1" class="read-more-trigger"></label>
            </Div>
			</Group>

			<Group title="Рецепты новогодних блюд" description={<div style={{userSelect: "none", textAlign: "center"}}></div>}>
<Div>На данный момент в этой категории нет рецептов.</Div>
					<List>
						{
							Object.keys(recipes_new_Year).map(i => <Cell
								onClick={() => this.selectrecipe_new_Year(i)}
								key={i}
								before={<div className="ico-align"><img alt={recipes_new_Year[i].title} className="ico-crop" type="image" src={require("../category_menu/recipes_new_Year"+recipes_new_Year[i].path)}/><br/></div>}
							>
							<span>{recipes_new_Year[i].title}</span>
							<span className="disable-selection text">Кухня: {recipes_new_Year[i].kitchen} </span>
							<span className="disable-selectionn text">Время: ~{recipes_new_Year[i].time}</span>
							</Cell>)
						}
					</List>
				</Group>
				<Div><Button before={<Icon24LogoVk/>} size="xl" level="secondary" component="a" href="https://vk.com/public184207972" target="_blank"> Сообщество</Button></Div>
					<br></br>


			</Panel>
			</View>













			<View id="discover" activePanel="discover">
			<Panel id="discover">
			<PanelHeader>Поиск</PanelHeader>
				<Search value={this.state.search} placeholder="Найти рецепт" onChange={this.onChange}/>
				{this.recipe_first_meal.length+this.recipe_second_course.length+this.recipe_dessert.length+this.recipe_snacks.length+this.recipe_salads.length+this.recipe_beverages.length+this.recipe_sauces.length+this.recipe_baking.length+this.recipe_easter.length+this.recipe_new_Year.length > 0 ?
				<List>
				{
    this.recipe_first_meal.map((recipe_first_meal,r) => (
	<Cell
	key={recipe_first_meal.id}
	onClick={() => this.selectrecipe_first_meal(recipe_first_meal.id)}
	>{recipe_first_meal.forpoisk}</Cell>
	)).sort((a,b) =>{ return a-b })}

				{
    this.recipe_second_course.map((recipe_second_course,r) => (
	<Cell
	key={recipe_second_course.id}
	onClick={() => this.selectrecipe_second_course(recipe_second_course.id)}
	>{recipe_second_course.forpoisk}</Cell>
	)).sort((a,b) =>{ return a-b })}

				{
    this.recipe_dessert.map((recipe_dessert,r) => (
	<Cell
	key={recipe_dessert.id}
	onClick={() => this.selectrecipe_dessert(recipe_dessert.id)}
	>{recipe_dessert.forpoisk}</Cell>
	)).sort((a,b) =>{ return a-b })}

				{
    this.recipe_snacks.map((recipe_snacks,r) => (
	<Cell
	key={recipe_snacks.id}
	onClick={() => this.selectrecipe_snacks(recipe_snacks.id)}
	>{recipe_snacks.forpoisk}</Cell>
	)).sort((a,b) =>{ return a-b })}

				{
    this.recipe_salads.map((recipe_salads,r) => (
	<Cell
	key={recipe_salads.id}
	onClick={() => this.selectrecipe_salads(recipe_salads.id)}
	>{recipe_salads.forpoisk}</Cell>
	)).sort((a,b) =>{ return a-b })}

				{
    this.recipe_beverages.map((recipe_beverages,r) => (
	<Cell
	key={recipe_beverages.id}
	onClick={() => this.selectrecipe_beverages(recipe_beverages.id)}
	>{recipe_beverages.forpoisk}</Cell>
	)).sort((a,b) =>{ return a-b })}

				{
    this.recipe_sauces.map((recipe_sauces,r) => (
	<Cell
	key={recipe_sauces.id}
	onClick={() => this.selectrecipe_sauces(recipe_sauces.id)}
	>{recipe_sauces.forpoisk}</Cell>
	)).sort((a,b) =>{ return a-b })}

				{
    this.recipe_baking.map((recipe_baking,r) => (
	<Cell
	key={recipe_baking.id}
	onClick={() => this.selectrecipe_baking(recipe_baking.id)}
	>{recipe_baking.forpoisk}</Cell>
	)).sort((a,b) =>{ return a-b })}

				{
    this.recipe_cakes.map((recipe_cakes,r) => (
	<Cell
	key={recipe_cakes.id}
	onClick={() => this.selectrecipe_cakes(recipe_cakes.id)}
	>{recipe_cakes.forpoisk}</Cell>
	)).sort((a,b) =>{ return a-b })}

				{
    this.recipe_garnish.map((recipe_garnish,r) => (
	<Cell
	key={recipe_garnish.id}
	onClick={() => this.selectrecipe_garnish(recipe_garnish.id)}
	>{recipe_garnish.forpoisk}</Cell>
	)).sort((a,b) =>{ return a-b })}

				{
    this.recipe_easter.map((recipe_easter,r) => (
	<Cell
	key={recipe_easter.id}
	onClick={() => this.selectrecipe_easter(recipe_easter.id)}
	>{recipe_easter.forpoisk}</Cell>
	)).sort((a,b) =>{ return a-b })}

				{
    this.recipe_new_Year.map((recipe_new_Year,r) => (
	<Cell
	key={recipe_new_Year.id}
	onClick={() => this.selectrecipe_new_Year(recipe_new_Year.id)}
	>{recipe_new_Year.forpoisk}</Cell>
	)).sort((a,b) =>{ return a-b })}
				</List> : <Group style={{textAlign: "center", marginTop: "8px"}}><Div>Ничего не найдено</Div></Group>
}


			</Panel>
			</View>
			<View id="recipeDetail_first_meal" activePanel="recipeDetail_first_meal" onSwipeBack={() => this.setState({activePanel: "feed"})}>
				<RecipeDetail_first_meal id="recipeDetail_first_meal" go={this.go} recipeId={this.state.recipeId} recipes_first_mealtartId={1} />
			</View>
			<View id="recipeDetail_second_course" activePanel="recipeDetail_second_course" onSwipeBack={() => this.setState({activePanel: "feed"})}>
				<RecipeDetail_second_course id="recipeDetail_second_course" go={this.go} recipeId={this.state.recipeId} recipes_second_courseId={1} />
			</View>
			<View id="recipeDetail_dessert" activePanel="recipeDetail_dessert" onSwipeBack={() => this.setState({activePanel: "feed"})}>
				<RecipeDetail_dessert id="recipeDetail_dessert" go={this.go} recipeId={this.state.recipeId} recipes_dessertId={1} />
			</View>
			<View id="recipeDetail_snacks" activePanel="recipeDetail_snacks" onSwipeBack={() => this.setState({activePanel: "feed"})}>
				<RecipeDetail_snacks id="recipeDetail_snacks" go={this.go} recipeId={this.state.recipeId} recipes_snacksId={1} />
			</View>
			<View id="recipeDetail_salads" activePanel="recipeDetail_salads" onSwipeBack={() => this.setState({activePanel: "feed"})}>
				<RecipeDetail_salads id="recipeDetail_salads" go={this.go} recipeId={this.state.recipeId} recipes_saladsId={1} />
			</View>
			<View id="recipeDetail_beverages" activePanel="recipeDetail_beverages" onSwipeBack={() => this.setState({activePanel: "feed"})}>
				<RecipeDetail_beverages id="recipeDetail_beverages" go={this.go} recipeId={this.state.recipeId} recipes_beveragesId={1} />
			</View>
			<View id="recipeDetail_sauces" activePanel="recipeDetail_sauces" onSwipeBack={() => this.setState({activePanel: "feed"})}>
				<RecipeDetail_snacks id="recipeDetail_sauces" go={this.go} recipeId={this.state.recipeId} recipes_saucesId={1} />
			</View>
			<View id="recipeDetail_baking" activePanel="recipeDetail_baking" onSwipeBack={() => this.setState({activePanel: "feed"})}>
				<RecipeDetail_baking id="recipeDetail_baking" go={this.go} recipeId={this.state.recipeId} recipes_bakingId={1} />
			</View>
			<View id="recipeDetail_cakes" activePanel="recipeDetail_cakes" onSwipeBack={() => this.setState({activePanel: "feed"})}>
				<RecipeDetail_cakes id="recipeDetail_cakes" go={this.go} recipeId={this.state.recipeId} recipes_cakesId={1} />
			</View>
			<View id="recipeDetail_garnish" activePanel="recipeDetail_garnish" onSwipeBack={() => this.setState({activePanel: "feed"})}>
				<RecipeDetail_garnish id="recipeDetail_garnish" go={this.go} recipeId={this.state.recipeId} recipes_garnishId={1} />
			</View>
			<View id="recipeDetail_easter" activePanel="recipeDetail_easter" onSwipeBack={() => this.setState({activePanel: "feed"})}>
				<RecipeDetail_easter id="recipeDetail_easter" go={this.go} recipeId={this.state.recipeId} recipes_easterId={1} />
			</View>
			<View id="recipeDetail_new_Year" activePanel="recipeDetail_new_Year" onSwipeBack={() => this.setState({activePanel: "feed"})}>
				<RecipeDetail_new_Year id="recipeDetail_new_Year" go={this.go} recipeId={this.state.recipeId} recipes_new_YearId={1} />
			</View>
			<View id="kitchenDetail" activePanel="kitchenDetail"  history={this.state.history} onSwipeBack={this.goBack} >
				<KitchenDetail id="kitchenDetail" backkitchen={this.backkitchen} recipeId={this.state.recipeId} recipes_first_mealtartId={1} />
			</View>










			<View id="proposition" activePanel="proposition" >
			<Panel id="proposition">
				<PanelHeader>Предложить рецепт</PanelHeader>

        <Group><FormLayout>

            <Input top="Название блюда" placeholder="Простые драники"/>
            <Input top="Категория" placeholder="Закуски"/>
            <Input top="Кухня" placeholder="Белорусская"/>
            <Input top="Примерное время готовки" placeholder="20 минут"/>
            <Textarea top="Ингредиенты" placeholder="— Картофель: 5 штук; &#10;— Соль: по вкусу; &#10;— Растительное масло: 5,5 столовые ложки; &#10;— Черный перец: по вкусу."/>
            <Textarea top="Инструкция приготовления" placeholder="1. Почистить картофель и измельчить на самой мелкой терке. &#10;2. Сетчатый дуршлаг поместить в кастрюлю, куда будет стекать сок. В дуршлаг поместить измельченную картофельную массу и оставить на 10 минут. &#10;3. Когда сок стечет, переложить картофельную массу в другую емкость, а сам сок аккуратно вылить из кастрюли. На дне кастрюли останется крахмал, который нужно добавить обратно в картофельную массу. &#10;4. Жарить получившееся тесто на подсолнечном масле в сковороде с толстым дном, выкладывая лепешками около 8–9 мм толщиной. Сначала обжарить 2–3 минуты с одной стороны. Перевернуть и дожарить около 1,5 минут. Огонь должен быть достаточно сильным, больше среднего — это опытным путем подбирается на разных плитах."/>
            <File top="Загрузите Ваше фото" before={<Icon24Camera />} size="xl">
                      Открыть галерею
            </File>

            <Checkbox>Я согласен(на) с <span><Link href="https://vk.com/@cooking_roti-pravila-razmescheniya-receptov" target="_blank">условиями</Link> размещения.</span></Checkbox>
            <Button size="xl">Предложить</Button>

        </FormLayout></Group>

			</Panel>
			</View>










			<View id="info" activePanel="info" >
			<Panel id="info">
				<PanelHeader>О нас</PanelHeader>
				<Group>
                <img className="Logo" src={CookingLogo} alt="CookingLogo"/>
                <Div>Рецепты для всей семьи. Вкусные блюда со списком ингредиентов и пошаговой инструкцией приготовления.</Div>
                </Group>
				<Group>
            <Link href="https://vk.com/public184207972"><CellButton before={<Icon24LogoVk />}> Наше сообщество</CellButton></Link>
            <Link href="https://vk.me/join/AJQ1d8mXeBW26_fbtP0pdG/3"><CellButton before={<Icon24Message />}> Наша беседа</CellButton></Link>
            <Link href="https://vk.me/public184207972"><CellButton before={<Icon24Add />}> Предложить рецепт</CellButton></Link>
            <Link href="mailto:rulers.oftheinfinite@mail.ru" target='_blank'><CellButton before={<Icon24Mention />}> Написать нам на почту</CellButton></Link>
                </Group>

    <Group title="Настройки">

        <List>
          <Cell asideContent={<Switch onChange={() => this.eruda()}/>} before={<Icon24Bug />}>
            Debug
          </Cell>
        </List>
      </Group>
            <Footer onClick={this.go} data-to="updates">Версия: 1.0.2</Footer>

        	</Panel>
			</View>










			<View id="updates" activePanel="updates" >
			<Panel id="updates">
				<PanelHeader  left={<HeaderButton onClick={() => this.this.goBack(1)}>
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>Обновления</PanelHeader>
		<Group title="Версия: Тестируем 1.0.2"><Div>
        • Небольшие исправления по дизайну.
        <br></br><br></br>
        • Различные исправления и улучшения.

        </Div></Group>

        <Group title="Версия: Готовимся к тестированию 0.0.3"><Div>
        • Передалана вкладка "Рецепты". Теперь она [вкладка] делится на 3 блока: кухни, категории, тематические категории.
        <br></br><br></br>
        • Во вкладке "Рецепты", в блок "Категории" добавлено 10 категорий: первые блюда, вторые блюда, десерты, закуски, салаты, напитки, соусы и кремы, выпечка, торты, гарниры.
        <br></br><br></br>
        • К каждой категории добавлены соответствующие карточки.

        </Div></Group>

        <Group title="Версия: Выйди отсюда, разбойник! 0.0.2"><Div>
        • Во вкладке "Рецепты", в блок "Кухни" добавлено 7 кухонь: Французская, Европейская, Американская, Белорусская, Армянская, Грузинская, Итальянская.
         <br></br><br></br>
        • Передалана вкладка "Рецепты". Теперь она [вкладка] делится на 2 блока: кухни и рецепты.
        </Div></Group>

        <Group title="Версия: Выйди отсюда, разбойник! 0.0.1.1"><Div>
        • Добавлена вкладка "Поиск".
        • Во вкладку "Рецепты" добавлена категория "Супы".
         <br></br><br></br>
        • В категории "Супы" добавлен "Гороховый суп с зеленью".
        </Div></Group>

        <Group title="Версия: Выйди отсюда, разбойник! 0.0.0.1"><Div>
            • Добавлен Debug, включается в "О нас" → "Настройки".
            <br></br><br></br>
            • Добавлена вкладка "Обновления".
            <br></br><br></br>
            • Во вкладку "О нас" добавлено: лого, описание сервиса, кнопка с иконкой "Наше сообщество",
            кнопка с иконкой "Наша беседа", кнопка с иконкой "Предложить рецепт".
            <br></br><br></br>
            • Созданы вкладки "Лента", "Рецепты", "О нас".
            <br></br><br></br>
            • Создан пустой сервис: <Link href="vk.com/app7144202">Cooking — кулинарный уголок</Link>.
        </Div></Group>
        	</Panel>
			</View>





		</Epic>
	)}
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	backkitchen: PropTypes.func.isRequired,
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
