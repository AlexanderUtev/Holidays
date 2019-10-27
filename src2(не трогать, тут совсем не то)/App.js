import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { Epic, Panel, Tabbar, TabbarItem, HeaderContext, PanelHeaderContent, PanelHeader, View, Group, HorizontalScroll, Tappable, Search, List, Cell, Button, HeaderButton, platform, IOS, } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';



class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			activeStory: 'home',
			fetchedUser: null,
			authToken : null,
			accessToken : null,
		};

	}

	go = (e) => {
		this.setState({ activeStory: e.currentTarget.dataset.to });
		window.history.pushState( { panel: e.currentTarget.dataset.to }, e.currentTarget.dataset.to );
	};

	menu (e) {
		if(e.state) {
			this.setState( { activePanel: e.state.panel } );
		} else {
			this.setState( { activePanel: 'feed', search: '' } );
			window.history.pushState( { panel: 'feed' }, `feed` );
		}
	}

	getWall = offset => {
        connect.send({"method": "wall.get", "params": {"owner_id": -184207972, offset: "offset", "v":"5.101", "access_token": this.state.authToken});
        }
    }

	componentDidMount() {
		window.addEventListener('popstate', e => e.preventDefault() & this.menu(e));
		window.history.pushState( { panel: 'feed' }, `feed` );
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;

                case 'VKWebAppCallAPIMethodResult':
                    this.setState({walls: e.detail.data.response.items})
                    break;
                case 'VKWebAppAccessTokenReceived':
                if (e.detail.data.scope.includes("wall")) {
                    this.setState({accessToken:data})
            }
                else //{что то вывести}
                    break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send("VKWebAppGetAuthToken", {"app_id": 7144202, "scope": "wall"});
		connect.send('VKWebAppGetUserInfo', {});
	}


const getWalls = async e => {
if (this.state.accessToken) {
await connect.sendPromise("VKWebAppCallAPIMethod", {
"method": "wall.get",
"params": {
"owner_id": e.currentTarget.dataset.id,
"count": 10,
"v":"5.101",
"access_token": this.state.accessToken.access_token
}
})
}
else {
getToken(e)
}
}

const getToken = async e => {
await connect.sendPromise("VKWebAppGetAuthToken", {"app_id": 7144202, "scope": "wall"})
}


	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" items={this.state.items} fetchedUser={this.state.fetchedUser} go={this.go} walls={this.state.walls}/>
			</View>
		);
	}
}

export default App;
