// src/navigation/AppNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';



const Stack = createNativeStackNavigator<any>();

const MainNavigator = () => {
  return (
   
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="InboundList">
        <Stack.Screen name="InboundList" component={HomeScreen} />
      </Stack.Navigator>
   
  );
};

export default MainNavigator;