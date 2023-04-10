import React from 'react';
import { Text, View } from 'react-native';

// ================== Navigation ================== //
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// =============== components ======================= //
import Home from './components/Home';
import About from './components/About';
import BarTab from './components/BarTab';

const Stack = createNativeStackNavigator();

  export default class App  extends React.Component {
  
    render() {
            return (
              <NavigationContainer>
                <Stack.Navigator 
                initialRouteName='dashboard'
                screenOptions={{
                  contentStyle: { 
                    backgroundColor: 'black'
                    },
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color: '#ffffff',
                    },
                    headerStyle: {
                      backgroundColor: 'black'
                    },
                    //headerTintColor: 'E50914'
                }}>
                  <Stack.Screen
                    name='home'
                    component={BarTab}
                    //options={{title: 'Bienvenue sur vos séries favorites'}}
                              options={{ headerShown: false }}



                  />
                  <Stack.Screen
                    name='About'
                    component={About}
                    options={({ route }) => ({ title: route.params.name })}
                    //{{ title: 'A propos ' }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            )
  }
}
