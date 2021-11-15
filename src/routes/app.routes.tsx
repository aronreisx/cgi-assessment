import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home'
import { Movie } from '../screens/Movie';

const { Navigator, Screen } = createStackNavigator();

export function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home}/>
        <Screen name="Movie" component={Movie}/>
      </Navigator>
    </NavigationContainer>
  )
}
