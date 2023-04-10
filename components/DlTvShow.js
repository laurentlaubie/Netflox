import React from "react";

import { Text, View, StyleSheet } from 'react-native';


export default class DlTvShow extends React.Component {

    
    render () {

        return (

            <View style={style.view}>
            <Text style={style.title}> Mes téléchargements </Text>
                <Text style={style.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
        )
    }


}

const style = StyleSheet.create({
view: {
    margin: 20
},
title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#E50914',
    fontWeight: 'bold',
    //textTransform: 'uppercase'
   
},
text: {
    color: '#FFFFFF'
}

})