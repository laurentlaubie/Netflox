import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NewTvShow from './NewTvShow';
import About from "./About";
import Home from "./Home";
import DlTvShow from "./DlTvShow"


//const image = {Uri: 'https://www.rts.ch/2020/05/22/14/20/9390881.image?w=1200&h=630'};
//const localImage = require("./assets/meteo.png")
export default class BarTab extends React.Component {

    render () {
       
        const Tab = createBottomTabNavigator();

        return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="NewTv" component={NewTvShow} />
            <Tab.Screen name="DlTvShow" component={DlTvShow} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>   
        )
    }

 }

