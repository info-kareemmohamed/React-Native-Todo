import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Home, TodoDetails, Todos } from '../constants';
import HomeScreen from '../Screens/Home';
import TodosScreen from '../Screens/CompletedTasks';
import TodoDetailsScreen from '../Screens/TodoDetails';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return (
    <Stack.Navigator initialRouteName={Home} >
        <Stack.Screen name={Home} component={HomeScreen} />
        <Stack.Screen name={Todos} component={TodosScreen} />
        <Stack.Screen name={TodoDetails} component={TodoDetailsScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator