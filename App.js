// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import AddTodoScreen from './Src/Screens/AddTodo';
import CompletedTasksScreen from './Src/Screens/CompletedTasks';
import HomeScreen from './Src/Screens/Home';
import NotCompletedTasks from './Src/Screens/NotCompletedTasks';
import  TodoDetailsScreen  from './Src/Screens/TodoDetails';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NotCompletedTasks/>
  );
}


