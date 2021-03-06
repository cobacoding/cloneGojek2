import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProducts extends Component {
    render() {
        return (
            <View>
             <View style={{height: 15, width: 60, marginLeft: 16}}>
               <Image source={require('../../../assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}></Image>
            </View>
          
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>Nearby Restaurant</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#61A756'}}>See All</Text>
            </View>
            <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
                <ScrollableItem title="KFC Tangcity" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                <ScrollableItem title="Bakmi GM Tangcity" img={require('../../../assets/dummy/go-food-gm.jpg')} />
                <ScrollableItem title="Martabak Orins" img={require('../../../assets/dummy/go-food-orins.jpg')} />
                <ScrollableItem title="Martabak Banka" img={require('../../../assets/dummy/go-food-banka.jpg')} />
                <ScrollableItem title="Bakso Baka Pak Bos" img={require('../../../assets/dummy/go-food-pak-boss.jpg')} />
              {/* <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 10}}>
                  <Image source={require('../../../assets/dummy/go-food-kfc.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}></Image>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>KFC Tangcity</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 10}}>
                  <Image source={require('../../../assets/dummy/go-food-gm.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}></Image>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Bakmi GM Tangcity</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 10}}>
                  <Image source={require('../../../assets/dummy/go-food-orins.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}></Image>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Martabak Orins</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 10}}>
                  <Image source={require('../../../assets/dummy/go-food-banka.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}></Image>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Martbak Banka</Text>
              </View>
              <View style={{marginRight: 16}}>
                <View style={{width: 150, height: 150, borderRadius: 10}}>
                  <Image source={require('../../../assets/dummy/go-food-pak-boss.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}></Image>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Ayam Baka Pak Bos</Text>
              </View> */}
            </ScrollView>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 16, marginHorizontal: 16, marginBottom: 20}}></View>
          </View>
        )
    }
}

export default ScrollableProducts;

