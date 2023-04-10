import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Carousel from './Carrousel';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NewTvShow from './NewTvShow';
import About from "./About";


//const image = {Uri: 'https://www.rts.ch/2020/05/22/14/20/9390881.image?w=1200&h=630'};
//const localImage = require("./assets/meteo.png")
export default class Home extends React.Component {

    render () {

        const { navigate } = this.props.navigation;
        const Tab = createBottomTabNavigator();

        return (
            <View style={style.view}>
                <Text style={style.title}>
                    NetFlox
                </Text>
                <Button 
                    title= "A propos"
                    onPress={() => navigate('About', { name: 'Qui sommes-nous ?' })}
                    
                />
            </View>
            
        )
    }

 }

const style = StyleSheet.create ({
    view: {
        margin: 20,
        //backgroundColor: 'black'
        
    },
    title: {
       
        fontSize: 50,
        marginTop: 200,
        color: '#E50914', 
        //marginBottom: 150,
        textAlign: "center",
        textTransform: 'uppercase'
        
    },
    image: {
        //flex: 1,
        //resizeMode: 'center',

    },
    carousel: {
        flex: 1,
    }
})
