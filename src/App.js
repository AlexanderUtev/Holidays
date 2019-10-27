import React from 'react';
import ReactDOM from 'react-dom';
import text from "./panels/texts";
import connect from '@vkontakte/vkui-connect';
import VKConnect from '@vkontakte/vkui-connect';
import mVKMiniAppsScrollHelper from '@vkontakte/mvk-mini-apps-scroll-helper';
import { View, Epic, TabbarItem, Panel, PanelHeader, Tabbar,  Alert } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Birthday from './panels/Birthday';
import NY from './panels/NY';
import Day_of_knowns from './panels/Day_of_knowns';
import Feb_23 from './panels/Feb_23';
import Pascha from './panels/Pascha';
import Martch_8 from './panels/Martch_8';
import Fave from './panels/Fave';
import persik from './img/persik.png';
import Info from './panels/Info';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon28Users from '@vkontakte/icons/dist/28/users';
import Icon24Attachments from '@vkontakte/icons/dist/24/attachments';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24UserOutline from '@vkontakte/icons/dist/24/user_outline';
import Icon24MoneyCircle from '@vkontakte/icons/dist/24/money_circle';
import Icon24Coins from '@vkontakte/icons/dist/24/coins';
import Icon24Info from '@vkontakte/icons/dist/24/info';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
var res;
const { createCanvas, loadImage } = require('canvas')
var sh = 3;
const canvas = createCanvas(1920, 1080)
const ctx = canvas.getContext('2d')
const axios = require('axios');
var name = 'test.txt'
var a;
const root = document.getElementById('root');
mVKMiniAppsScrollHelper(root);
var test1 = 0
var type = 'text/plain'
const data = new FormData();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'home',
      fetchedUser: null,
      userName: null,
      favorite: '1',
      current_text: '1',
      popout: null,
      select_pos: '',
      group: '1',
      last_text: '',
      last2_text: '',
      last3_text: '',
      select_pos_energy: 'dj',
      select_pos_end_energy: 'kal',
      select_pos_end: '',
      activeStory: 'home',
      error_value: '0',
      activeTab4: '1',
      eruda: false
    };
    this.onStoryChange = this.onStoryChange.bind(this);
   this.openDefault = this.openDefault.bind(this);
     this.openDestructive = this.openDestructive.bind(this);
    this.closePopout = this.closePopout.bind(this);
  }
  componentDidMount() {
    this.openDefault()
    connect.subscribe((e) => {
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          this.setState({ fetchedUser: e.detail.data, userName: e.detail.data.first_name ,activePanel: 'home' });
          console.log('111112332111', e.detail.data)
          console.log('222222', e.detail.data.id, e.detail.data.first_name)
          break;
          case 'VKWebAppStorageGetResult':
          //  this.setState({ favorite: e.detail.data.fav});
            console.log('e.detail.data.fav', e.detail.data.fav)
            console.log('e.detail', e.detail)
            break;
        case 'VKWebAppShowWallPostBoxResult':
          this.openPopout()
          break;
          case 'VKWebAppOpenQRResult':
            let res = e.detail.data
            var qr_res = res.qr_data;
            this.openPopout(qr_res)
            break;
            case 'VKWebAppUpdateConfig':
                let schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = e.detail.data.scheme ? e.detail.data.scheme : 'bright_light';
                document.body.attributes.setNamedItem(schemeAttribute);
                break;
        default:
          console.log(e.detail.type);
      }
    });
    VKConnect.subscribe((e) => {
          let a = e.detail;
          console.log('Event:ТУТ \n', a);
          console.log('e.detail.data:ТУТ \n', e.detail.data);
          let res = e.detail.data

          if(a.type === 'VKWebAppOpenQRResult'){
              console.log('Event:ТУТ2222\n', res);
            var qr_res = res.qr_data;
            console.log('Event:ТУТ Расшифровка QR \n', qr_res);
            console.log('Event:ТУТ тип ивента \n', e.detail.handler );
            this.openPopout(qr_res, 'Расшифровка QR')
          }
          if(a.type === 'VKWebAppAccessTokenReceived'){
              console.log('Event:ТУТ2222\n', e.detail.data.access_token);
              this.share(e.detail.data.access_token)
          }
          if(a.type === 'VKWebAppCallAPIMethodResult'){
              console.log('Event:ТУТ2222\n', e.detail.data.response);
              this.story(e.detail.data.response)
          } // VKWebAppStorageGetResult
          if(a.type === 'VKWebAppAddToFavorites'){
              console.log('Event:ТУТ2222\n', e.detail.data.response);
          }
          if(a.type === 'VKWebAppAddToFavoritesResult'){
              console.log('VKWebAppAddToFavoritesResult:\n', e.detail.data.result);
              if(e.detail.data.result){
                connect.send("VKWebAppStorageSet", {"key": "fav", "value": '0'});
                this.favorite_set(0)
              } else {
                connect.send("VKWebAppStorageSet", {"key": "fav", "value": '1'});
                this.favorite_set(1)
              }
          }
          if(a.type === 'VKWebAppJoinGroupResult'){
              console.log('VKWebAppAddToFavoritesResult:\n', e.detail.data.result);
              if(e.detail.data.result){
                connect.send("VKWebAppStorageSet", {"key": "gr", "value": '0'});
                this.group_set(0)
              } else {
                connect.send("VKWebAppStorageSet", {"key": "gr", "value": '1'});
                this.group_set(1)
              }
          }
          if(a.type === 'VKWebAppStorageGetResult'){
              this.setState({ favorite: e.detail.data.keys[1].value })
              this.setState({ group: e.detail.data.keys[0].value })
              console.log('Event:КЛЮЧИ\n', e.detail.data.keys);
                console.log('КЛЮЧИ !! e.detail.data.keys:\n', e.detail.data.keys.fav);
                console.log('КЛЮЧИ !! e.detail.data.keys[1].value:\n', e.detail.data.keys[1].value);
              console.log('Event:ТУТ22sdv123123222\n', e);
              console.log('Event:ТУТ223123122\n', res);
          }
          if(a.type === 'VKWebAppStorageSetResult'){
              console.log('Event:ТУТ22fwecvsdv22\n', e.detail);
              console.log('Event:ТУТ22sdv123123222\n', e);
              console.log('Event:ТУТ223123122\n', res);
          }
          if(a.type === 'VKWebAppSetLocationResult'){
              console.log('Event:VKWebAppSetLocationResult\n', e.detail);
              console.log('Event:VKWebAppSetLocationResult\n', e);
              console.log('Event:VKWebAppSetLocationResult\n', res);
          } // VKWebAppSetLocationResult
          if(a.type === 'VKWebAppOpenPayFormResult'){
            if(res.status !== undefined){
                console.log('ОПЛАТА\n', res.status);
                if(res.status){
                    this.mem(11);
                } else this.openPopout('Оплата была отменена пользователем', 'Ошибка оплаты.')
            }else this.openPopout('Неопознанная ошибка', 'Ошибка')
            if(res !== undefined){
              console.log('ПОЛНЫЙ ЛОГ ОПЛАТЫ\n', res);
            }
              if(res.result.status !== undefined){
                  console.log('ОПЛАТА2 FIX\n', res.result.status);
                  if(res.result.status){
                      this.mem(1);
                  } else this.openPopout('Оплата была отменена пользователем', 'Ошибка оплаты.')
              }
            }
      }); // VKWebAppAddToFavorites
    connect.send('VKWebAppGetUserInfo', {});
    connect.send("VKWebAppStorageGet", {"keys": ["gr", "fav"]});
  //  connect.send("VKWebAppSetLocation", {"location": "hash"});
  }
  eruda = async () => {
    await this.setState({eruda: !this.state.eruda})
    this.state.eruda ? window.eruda.init() : window.eruda.destroy()
}

  copyToClipboard = (str) => {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selected =
          document.getSelection().rangeCount > 0
              ? document.getSelection().getRangeAt(0)
              : false;
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      if (selected) {
          document.getSelection().removeAllRanges();
          document.getSelection().addRange(selected);
      }
  }
  go1 = (e) => {
    this.setState({ activePanel: e })
  };
  tab = (e) => {
    this.setState({ activeTab4: e })
  };
  favorite_set = (e) => {
    this.setState({ favorite: e })
  };
  group_set = (e) => {
    this.setState({ group: e })
  };
  select2 = (e) => {
    if(e !== undefined){
        this.setState({ select_pos: e })
      }
     return this.state.select_pos
  };
  select_end = (e) => {
    if(e !== undefined){
        this.setState({ select_pos_end: e })
      }
     return this.state.select_pos_end
  };
  error = (e) => {
    if(e !== undefined){
        this.setState({ error_value: e })
      }
     return this.state.error_value
  };
  select2_energy = (e) => {
    if(e !== undefined){
        this.setState({ select_pos_energy: e })
      }
     return this.state.select_pos_energy
  };
  select2_end_energy = (e) => {
    if(e !== undefined){
        this.setState({ select_pos_end_energy: e })
      }
     return this.state.select_pos_end_energy
  };
  tab2 = (e) => {
    this.setState({ activeTab4: e })
    if(this.state.activeTab4 === '1') {
      return true
    } else return false
  };
  pay = (amount) => {
    connect.send("VKWebAppOpenPayForm", {"app_id": 7076632, "action": "pay-to-group", "params": {"group_id":186316619, "amount": amount}});
  };
  mem = () => {
    ctx.font = '30px Impact'
    ctx.fillText('Test', 50, 100)
      var text = ctx.measureText('Test!')
      ctx.strokeStyle = 'rgba(0,0,0,0)'
      ctx.beginPath()
      ctx.stroke()

loadImage(persik).then((image) => {
  ctx.drawImage(image, 50, 0, 70, 70)

 console.log(this.dataURLtoFile(canvas.toDataURL(), 'test.png'))
 console.log('DATAATATTA', data)
})
  };

rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
num = (number, fromBase, toBase) => {
  return this.fromDec(this.toDec(number, fromBase), toBase);
}
 toDec = (number, fromBase)  =>  {
  var result = 0;
  number = number.toString().toLowerCase().split('');
  for(var index = 0, length = number.length, digit; index < length; index++) {
    digit = this.prepareDigit(number[index]);
    result = result * fromBase + digit;
  }
  return result;
}
 fromDec = (number, toBase)  => {
  var result = [], integerPart, digit;
  while(number >= 1) {
    integerPart = parseInt(number/toBase);
    digit = number - toBase * integerPart;
    if(digit >= 10)
      digit = String.fromCharCode(digit + 87);
    result.unshift(digit);
    number = integerPart;
  }

  return result.join('');
}
 prepareDigit = (digit)  =>  {
  digit = digit.charCodeAt() - 48;
  if(digit > 48)
    digit -= 39;
  return digit;
}


  go = (e) => {
		const route = e.currentTarget.dataset.to;
		this.setState({ activePanel: route })
	};
  share = (tok) => {
    connect.send("VKWebAppCallAPIMethod", {"method": "stories.getPhotoUploadServer", "request_id": "32test", "params": {"add_to_news": "1", "v":"5.101", "access_token": tok}});
    console.log(tok)
  }
   urltoFile = (url, filename, mimeType) => {
    return (fetch(url)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], filename, {type:mimeType});})
    );
}
dataURLtoFile = (dataurl, filename) => {
  console.log('dsfsdf',dataurl )
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}
  story = (url) => {
    ctx.font = '30px Impact'
    ctx.fillText('Test', 50, 100)
      var text = ctx.measureText('Test!')
      ctx.strokeStyle = 'rgba(0,0,0,0)'
      ctx.beginPath()
      ctx.stroke()

loadImage(persik).then((image) => {
  ctx.drawImage(image, 50, 0, 70, 70)

 console.log(this.dataURLtoFile(canvas.toDataURL(), 'test.png'))

})
      var url2 = 'https://cors-anywhere.herokuapp.com/' + url.upload_url;
    axios({
      method: 'post',
      url: url2,
      data: {
          file  : this.dataURLtoFile(canvas.toDataURL(), 'test.png'),
        }
      }).then(function (response) {
      console.log(response)
  });
    console.log(url.upload_url)
    console.log(url2)
  }

  openDefault () {
      this.setState({ popout:
        <Alert
          actions={[{
            title: 'Отмена',
            autoclose: true,
            style: 'cancel'
          }, {
            title: 'Добавить',
            autoclose: true,
          }]}
          onClose={this.closePopout}
        >
          <h2>Подтвердите действие</h2>
          <p>Добавить пользователю право на модерацию контента.</p>
        </Alert>
      });
    }

    openDestructive () {
      this.setState({ popout:
        <Alert
          actionsLayout="vertical"
          actions={[{
            title: 'Лишить права',
            autoclose: true,
            style: 'destructive'
          }, {
            title: 'Отмена',
            autoclose: true,
            style: 'cancel'
          }]}
          onClose={this.closePopout}
        >
          <h2>Подтвердите действие</h2>
          <p>Вы уверены, что хотите лишить пользователя права на модерацию контента?</p>
        </Alert>
      });
    }

    closePopout () {
      this.setState({ popout: null });
    }

  onStoryChange = (e) => {
  console.log('12312', e.currentTarget.dataset.story)
  this.setState({ activeStory: e.currentTarget.dataset.story })
  if(e.currentTarget.dataset.story === 'energy'){
    this.setState({ select_pos: 'dj' })
    this.setState({ select_pos_end: 'kal' })
  }
  else if(e.currentTarget.dataset.story === 'temp'){
      this.setState({ select_pos: 'c' })
      this.setState({ select_pos_end: 'f' })
    } else if(e.currentTarget.dataset.story === 'corn1'){
        this.setState({ select_pos: 'gr' })
        this.setState({ select_pos_end: 'rad' })
      } else {
    this.setState({ select_pos: '' })
    this.setState({ select_pos_end: '' })
  }
}
  fetchedUser2 = (e) => {
  if(this.fetchedUser !== undefined){
    return this.fetchedUser.e
  }
}
  refresh = () => {
    var test = Math.floor(Math.random() * (text.new_year.length - 1 + 1)) + 0;
    var test2 = Math.floor(Math.random() * (text.new_year.length - 1 + 1)) + 0;
      console.log('act')
    if(test !== this.state.current_text){
      console.log('act')
    this.setState({ current_text: test })
    if(this.state.last2_text === '' && this.state.last_text === ''){
      this.setState({ last_text: test })
    } else {
      console.log('act2')
        this.setState({ last2_text: test2 }) // test
        this.setState({ current_text: test2 })
    }

  }
    console.log('Прошлая страница', this.state.last_text)
    console.log('Текущая страница', this.state.current_text)
}
  user_name = () => {
  if(this.fetchedUser !== undefined){
    return this.fetchedUser.first_name
  }
}
preview = (e) => {
  connect.send("VKWebAppShowWallPostBox", {"message": e});
}
fav = (e) => {
  console.log('тип добавилось в закладки')
}
render () {
  return (
    <Epic activeStory={this.state.activeStory} tabbar={
      <Tabbar>
             <TabbarItem text="Поздравления" onClick={this.onStoryChange} selected={this.state.activeStory !== 'info' && this.state.activeStory !== 'fave'} data-story="home"><Icon24Gift /></TabbarItem>
              <TabbarItem text="Избранное" onClick={this.onStoryChange} selected={this.state.activeStory === 'fave'}  data-story='fave' >{this.state.activeStory === 'fave'  ? <Icon24Favorite/> : <Icon24FavoriteOutline/> }</TabbarItem>
             <TabbarItem text="Настройки" onClick={this.onStoryChange} selected={this.state.activeStory === 'info'}  data-story='info' ><Icon24Settings   /></TabbarItem>
     </Tabbar>
    }>
      <View id="home" activePanel="home">
        <Home openPopout={this.openDefault} closePopout={this.closePopout} onStoryChange={this.onStoryChange}  fav={this.fav} favorite_set={this.favorite_set} group_set={this.group_set} favorite={this.state.favorite} group={this.state.group} go1={this.go1} fetchedUser3={this.fetchedUser3} userName={this.state.userName} activePanel={this.state.activePanel} id="home" share={this.share} copyToClipboard={this.copyToClipboard} fetchedUser={this.state.fetchedUser} go={this.go} pay={this.pay} />
      </View>
      <View id="info" activePanel="info">
      <Info eruda={this.eruda} fav={this.fav} onStoryChange={this.onStoryChange} id="info" share={this.share} openPopout={this.openPopout} copyToClipboard={this.copyToClipboard} fetchedUser={this.state.fetchedUser} go={this.go} />
      </View>
      <View id="fave" activePanel="fave">
      <Fave id="fave" fav={this.fav} onStoryChange={this.onStoryChange} preview={this.preview}  refresh={this.refresh} state={this.state} current_text={this.state.current_text} error_f={this.error} error_s={this.state.error_value} zn={this.state.select_pos} zn_end={this.state.select_pos_end} select2={this.select2} select_end={this.select_end} shift={this.shiftAlphabet}  pay={this.pay} share={this.share} openPopout={this.openPopout} copyToClipboard={this.copyToClipboard} fetchedUser={this.state.fetchedUser} go={this.go} />
      </View>
      <View id="birthday" activePanel="birthday">
      <Birthday id="birthday" fav={this.fav} onStoryChange={this.onStoryChange} preview={this.preview}  refresh={this.refresh} state={this.state} current_text={this.state.current_text} error_f={this.error} error_s={this.state.error_value} zn={this.state.select_pos} zn_end={this.state.select_pos_end} select2={this.select2} select_end={this.select_end} shift={this.shiftAlphabet}  pay={this.pay} share={this.share} openPopout={this.openPopout} copyToClipboard={this.copyToClipboard} fetchedUser={this.state.fetchedUser} go={this.go} />
      </View>
      <View id="ny" activePanel="ny">
      <NY id="ny" fav={this.fav} onStoryChange={this.onStoryChange} preview={this.preview}  refresh={this.refresh} state={this.state} current_text={this.state.current_text} error_f={this.error} error_s={this.state.error_value} zn={this.state.select_pos} zn_end={this.state.select_pos_end} select2={this.select2} select_end={this.select_end} shift={this.shiftAlphabet}  pay={this.pay} share={this.share} openPopout={this.openPopout} copyToClipboard={this.copyToClipboard} fetchedUser={this.state.fetchedUser} go={this.go} />
      </View>
      <View id="day_of_knowns" activePanel="day_of_knowns">
      <Day_of_knowns id="day_of_knowns" fav={this.fav} onStoryChange={this.onStoryChange} preview={this.preview}  refresh={this.refresh} state={this.state} current_text={this.state.current_text} error_f={this.error} error_s={this.state.error_value} zn={this.state.select_pos} zn_end={this.state.select_pos_end} select2={this.select2} select_end={this.select_end} shift={this.shiftAlphabet}  pay={this.pay} share={this.share} openPopout={this.openPopout} copyToClipboard={this.copyToClipboard} fetchedUser={this.state.fetchedUser} go={this.go} />
      </View>
      <View id="martch_8" activePanel="martch_8">
      <Martch_8 id="martch_8" fav={this.fav} onStoryChange={this.onStoryChange} preview={this.preview}  refresh={this.refresh} state={this.state} current_text={this.state.current_text} error_f={this.error} error_s={this.state.error_value} zn={this.state.select_pos} zn_end={this.state.select_pos_end} select2={this.select2} select_end={this.select_end} shift={this.shiftAlphabet}  pay={this.pay} share={this.share} openPopout={this.openPopout} copyToClipboard={this.copyToClipboard} fetchedUser={this.state.fetchedUser} go={this.go} />
      </View>
      <View id="feb_23" activePanel="feb_23">
      <Feb_23 id="feb_23" fav={this.fav} onStoryChange={this.onStoryChange} preview={this.preview}  refresh={this.refresh} state={this.state} current_text={this.state.current_text} error_f={this.error} error_s={this.state.error_value} zn={this.state.select_pos} zn_end={this.state.select_pos_end} select2={this.select2} select_end={this.select_end} shift={this.shiftAlphabet}  pay={this.pay} share={this.share} openPopout={this.openPopout} copyToClipboard={this.copyToClipboard} fetchedUser={this.state.fetchedUser} go={this.go} />
      </View>
      <View id="pascha" activePanel="pascha">
      <Pascha id="pascha" fav={this.fav} onStoryChange={this.onStoryChange} preview={this.preview}  refresh={this.refresh} state={this.state} current_text={this.state.current_text} error_f={this.error} error_s={this.state.error_value} zn={this.state.select_pos} zn_end={this.state.select_pos_end} select2={this.select2} select_end={this.select_end} shift={this.shiftAlphabet}  pay={this.pay} share={this.share} openPopout={this.openPopout} copyToClipboard={this.copyToClipboard} fetchedUser={this.state.fetchedUser} go={this.go} />
      </View>

    </Epic>
  )
}
}

ReactDOM.render(<App />, root);
export default App;
