import React, {Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import { withNavigation } from 'react-navigation';

class NavBar extends Component {
    render() {
        return(
        <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <NavBarIcon onPress={() => this.props.navigation.navigate('Home')} title="Home" img={require('../../../assets/icon/home-active.png')} active/>
          <NavBarIcon onPress={() => this.props.navigation.navigate('Orders')} title="Orders" img={require('../../../assets/icon/order.png')}/>
          <NavBarIcon onPress={() => this.props.navigation.navigate('')} title="Help" img={require('../../../assets/icon/help.png')}/>
          <NavBarIcon onPress={() => this.props.navigation.navigate('')} title="Inbox" img={require('../../../assets/icon/inbox.png')}/>
          <NavBarIcon onPress={() => this.props.navigation.navigate('')} title="Account" img={require('../../../assets/icon/account.png')}/>
          {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/home-active.png')}></Image>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4, color: '#43AB4A'}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/order.png')}></Image>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/help.png')}></Image>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/inbox.png')}></Image>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Inbox</Text>
          </View>
          <View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./src/assets/icon/account.png')}></Image>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Account</Text>
          </View> */}
        </View>
        )
    }
}

export default withNavigation (NavBar);
