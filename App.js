// crated by : riky kurniawan

import React, {Component} from 'react';
import Router from './src/config/router';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';
import NavBar from './src/containers/organisms/NavBar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// komponen dinamis dengan props

//class komponen
// class GopayFeature extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center'}}>
//         <Image source={this.props.img}/>
//         <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{this.props.title}</Text>
//       </View>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <Router/>
      // <View style={{flex: 1}}>
      //   <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      //     {/* search bar */}
      //     <SearchFeature />
      //     {/* <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
      //       <View style={{position: 'relative', flex: 1}}>
      //         <TextInput placeholder="what do you want to eat ?" style={{borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white',marginRight: 18}}/>
      //         <Image source={require('./src/assets/icon/search.png')} style={{position: 'absolute', top: 5, left: 12}}></Image>
      //       </View>
      //       <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
      //         <Image source={require('./src/assets/icon/promo.png')}></Image>
      //       </View>
      //     </View> */}
      //     {/* gopay */}
      //     <HomeGoPay />
      //     {/* Main Feature */}
      //     <HomeMainFeature />

      //     <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>
      //     {/* News Section */}
      //     <GoNews />
      //     {/* <View style={{paddingTop: 16, paddingHorizontal: 16}}>
      //       <View style={{position: 'relative'}}>
      //         <Image source={require('./src/assets/dummy/sepak-bola.jpg')} style={{height: 200, width: '100%', borderRadius: 6}}></Image>
      //         <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}></View>
      //         <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
      //           <Image source={require('./src/assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}></Image>
      //         </View>
      //       </View>
      //       <View style={{paddingTop: 16, paddingBottom: 20, borderRadius: 6, borderBottomWidth: 1, borderBottomColor: '#E8E9ED'}}>
      //         <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
      //         <Text style={{fontSize: 24, fontWeight: 'normal', color: '#7A7A7A'}}>Aplikasi By : Riky</Text>
      //         <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
      //           <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
      //         </TouchableOpacity>
      //       </View>
      //     </View> */}

      //     {/* Internal Information Section */}
      //     <GoInfo />
      //     {/* <View style={{padding: 16, paddingBottom: 0}}>
      //         <View style={{height: 15, width: 60, marginLeft: -4}}>
      //           <Image source={require('./src/assets/logo/gojek.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}></Image>
      //         </View>
      //         <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', marginTop: 15, marginBottom: 20}}>Complete your profile</Text>
      //         <View style={{flexDirection: 'row', marginBottom: 16}}>
      //           <View>
      //             <Image source={require('./src/assets/dummy/facebook-connect.png')}></Image>
      //           </View>
      //           <View style={{marginLeft: 16, flex: 1}}>
      //             <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}}>Connect with facebook</Text>
      //             <Text style={{fontSize: 14, fontWeight: 'normal', color: '#4A4A4A', width: '70%'}}>Login Faster without verification code</Text>
      //           </View>
      //         </View>
      //         <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
      //           <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Connect</Text>
      //         </TouchableOpacity>
      //         <View style={{borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 16}}></View>
      //     </View> */}

      //     {/* Go Food Banner Section */}
      //     <GoBanner />
      //     {/* <View style={{padding: 16}}>
      //       <View style={{position: 'relative'}}>
      //         <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{height: 200, width: '100%', borderRadius: 6}}></Image>
      //         <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6}}></View>
      //         <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
      //           <Image source={require('./src/assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}></Image>
      //         </View>
      //         <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
      //           <View>
      //             <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}>Free GO-FOOD voucher</Text>
      //             <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>Quick, before they run out</Text>
      //           </View>
      //           <View style={{flex: 1, paddingLeft: 12}}>
      //             <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4}}>
      //             <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCHER</Text>
      //             </TouchableOpacity>
      //           </View>
      //         </View>
      //       </View>
      //       <View style={{borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 16}}></View>
      //     </View> */}

      //     {/* Nearby Restaurant */}
      //     <ScrollableProducts />
      //     {/* <View>
      //        <View style={{height: 15, width: 60, marginLeft: 16}}>
      //          <Image source={require('./src/assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}></Image>
      //       </View>
          
      //       <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
      //         <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>Nearby Restaurant</Text>
      //         <Text style={{fontSize: 16, fontWeight: 'bold', color: '#61A756'}}>See All</Text>
      //       </View>
      //       <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
      //         <View style={{marginRight: 16}}>
      //           <View style={{width: 150, height: 150, borderRadius: 10}}>
      //             <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}></Image>
      //           </View>
      //           <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>KFC Tangcity</Text>
      //         </View>
      //         <View style={{marginRight: 16}}>
      //           <View style={{width: 150, height: 150, borderRadius: 10}}>
      //             <Image source={require('./src/assets/dummy/go-food-gm.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}></Image>
      //           </View>
      //           <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Bakmi GM Tangcity</Text>
      //         </View>
      //         <View style={{marginRight: 16}}>
      //           <View style={{width: 150, height: 150, borderRadius: 10}}>
      //             <Image source={require('./src/assets/dummy/go-food-orins.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}></Image>
      //           </View>
      //           <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Martabak Orins</Text>
      //         </View>
      //         <View style={{marginRight: 16}}>
      //           <View style={{width: 150, height: 150, borderRadius: 10}}>
      //             <Image source={require('./src/assets/dummy/go-food-banka.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}></Image>
      //           </View>
      //           <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Martbak Banka</Text>
      //         </View>
      //         <View style={{marginRight: 16}}>
      //           <View style={{width: 150, height: 150, borderRadius: 10}}>
      //             <Image source={require('./src/assets/dummy/go-food-pak-boss.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}}></Image>
      //           </View>
      //           <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>Ayam Baka Pak Bos</Text>
      //         </View>
      //       </ScrollView>
      //       <View style={{borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 16, marginHorizontal: 16, marginBottom: 20}}></View>
      //     </View> */}

      //   </ScrollView>
      //   <NavBar />
      // </View>
    );
  }
}

export default App;



