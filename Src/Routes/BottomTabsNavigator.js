import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import CompletedTasksScreen from '../Screens/CompletedTasks'
import NoteCompletedTasksScreen from '../Screens/NotCompletedTasks'

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Main, CompletedTasks,NoteCompletedTasks, AddTodo } from '../constants';
import AddTodoScreen from '../Screens/AddTodo';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Icon2 from 'react-native-vector-icons/AntDesign'; 


const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name={Main} component={StackNavigator} options={{
          tabBarIcon: () => <Entypo name="home" size={26} color="black" />
        }} />
        <Tab.Screen name={CompletedTasks} component={CompletedTasksScreen}options={{
          tabBarIcon: () => <FontAwesome5 name="check-double" size={26} color="black" />
        }} />
 <Tab.Screen name={AddTodo} component={AddTodoScreen}options={{
          tabBarIcon: () => <Icon2 name="pluscircleo" size={26} color="black" />
        }} />


<Tab.Screen name={NoteCompletedTasks} component={NoteCompletedTasksScreen}options={{
          tabBarIcon: () => <Icon name="frown-o" size={26} color="black" />
        }} />
    </Tab.Navigator>
  )
};

export default BottomTabsNavigator