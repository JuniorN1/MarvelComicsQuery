import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Screen,Navigator} = createStackNavigator();

import HomeScreen from '../pages/HomeScreen';
import { StatusBar } from 'react-native';
function Router() {
  return (
    <NavigationContainer >
        <StatusBar hidden={true} />
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="Home" component={HomeScreen} />
        </Navigator>
    </NavigationContainer>
  );
}

export default Router;