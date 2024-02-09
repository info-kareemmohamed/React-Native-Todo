// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import Router from './Src/Routes';
import AddTodoScreen from './Src/Screens/AddTodo';
import CompletedTasksScreen from './Src/Screens/CompletedTasks';
import HomeScreen from './Src/Screens/Home';
import NotCompletedTasks from './Src/Screens/NotCompletedTasks';
import  TodoDetailsScreen  from './Src/Screens/TodoDetails';
import { store } from "./Src/Redux/Store";
import { Provider } from 'react-redux'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Provider store={store}>
      <Router />
    </Provider>
    );
}


