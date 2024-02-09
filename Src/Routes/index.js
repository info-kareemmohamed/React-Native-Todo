import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './BottomTabsNavigator';

const Router = () => {
  return (
    <NavigationContainer>
        <BottomTabsNavigator />
    </NavigationContainer>
  )
}

export default Router; 