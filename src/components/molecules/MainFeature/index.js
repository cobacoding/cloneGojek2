import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

const MainFeature = (props) => {
    return (
        <View style={{width: '25%', alignItems: 'center', marginBottom: 18}}>
            <View style={{width: 78, height: 78, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>        
                <Image source={props.img}></Image>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>{props.title}</Text>
            </View>
        </View>
    )
}

export default MainFeature;