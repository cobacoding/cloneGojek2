import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature';

class HomeGoPay extends Component {
    render() {
        return(
        <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderBottomRightRadius: 4, padding: 14}}>
              <Image source={require('../../../assets/icon/gopay.png')}></Image>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp 50.000</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
              {/* <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/pay.png')}></Image>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Pay</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/nearby.png')}></Image>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Nearby</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/topup.png')}></Image>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Top Up</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/more.png')}></Image>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>More</Text>
              </View> */}
              <GopayFeature title="pay" img={require('../../../assets/icon/pay.png')}/>
              <GopayFeature title="Nearby" img={require('../../../assets/icon/nearby.png')} />
              <GopayFeature title="Top Up" img={require('../../../assets/icon/topup.png')}/>
              <GopayFeature title="More" img={require('../../../assets/icon/more.png')} />
            </View>
        </View>
        )
    }
}

export default HomeGoPay;