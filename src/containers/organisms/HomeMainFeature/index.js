import React, {Component} from 'react';
import {View} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';


class HomeMainFeature extends Component {
    render() {
        return (
        <View style={{flexDirection: 'row', flexWrap:'wrap', marginTop: 18}}>
            <View style={{justifyContent:'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
              <MainFeature title="GO-RIDE" img={require('../../../assets/icon/go-ride.png')} />
              <MainFeature title="GO-CAR" img={require('../../../assets/icon/go-car.png')}/>
              <MainFeature title="GO-BLUEBIRD" img={require('../../../assets/icon/go-bluebird.png')} />
              <MainFeature title="GO-SEND" img={require('../../../assets/icon/go-send.png')} />
              <MainFeature title="GO-DEALS" img={require('../../../assets/icon/go-deals.png')} />
              <MainFeature title="GO-PULSA" img={require('../../../assets/icon/go-pulsa.png')} />
              <MainFeature title="GO-FOOD" img={require('../../../assets/icon/go-food.png')} />
              <MainFeature title="MORE" img={require('../../../assets/icon/go-more.png')} />
              {/* <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 78, height: 78, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>        
                  <Image source={require('./src/assets/icon/go-ride.png')}></Image>
                  <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-RIDE</Text>
                </View>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
               <View style={{width: 78, height: 78, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-car.png')}></Image>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-CAR</Text>
               </View>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
               <View style={{width: 78, height: 78, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-bluebird.png')}></Image>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-BLUEBIRD</Text>
               </View>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
               <View style={{width: 78, height: 78, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-send.png')}></Image>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-SEND</Text>
               </View>
              </View>
            </View>
            <View style={{justifyContent:'space-between', flexDirection: 'row', width: '100%'}}>
              <View style={{width: '25%', alignItems: 'center'}}>
               <View style={{width: 78, height: 78, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-deals.png')}></Image>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-DEALS</Text>
               </View>    
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View style={{width: 78, height: 78, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./src/assets/icon/go-pulsa.png')}></Image>
                  <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-PULSA</Text>
                </View>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
               <View style={{width: 78, height: 78, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-food.png')}></Image>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-FOOD</Text>
               </View>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
               <View style={{width: 78, height: 78, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./src/assets/icon/go-more.png')}></Image>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>MORE</Text>
               </View>
              </View> */}
            </View>
          </View>
        )
    }
}

export default HomeMainFeature;