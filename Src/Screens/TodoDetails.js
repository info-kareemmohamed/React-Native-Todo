import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateTodoNotCompleted } from '../Redux/slice/todonotcompleted.slice';
import { updateTodoCompleted } from '../Redux/slice/todocompleted.slice';
import { updateTodo } from '../Redux/slice/todo.slice';
import { Home } from '../constants';

const TodoDetailsScreen = ({ navigation, route }) => {
    const { todo } = route.params;
    const dispatch = useDispatch();

    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);

    const handleUpdate = () => {
        const updatedTodo = {
            ...todo,
            title: title,
            description: description,
        };
        dispatch(updateTodo(updatedTodo));
        dispatch(updateTodoNotCompleted(updatedTodo));
        dispatch(updateTodoCompleted(updatedTodo));
        navigation.navigate(Home);

    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>TODO APP</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={(text) => setDescription(text)}
            />
            <TouchableOpacity style={styles.touchableOpacity} onPress={handleUpdate}>
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({

    text: {
    
   
      fontWeight:'bold',
      fontSize:20,
    
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 120,
      fontWeight:'bold',
      paddingRight: 20,
      paddingLeft: 20,
    },
    input: {
      height: 40,
      margin: 12,
      width: 250,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    touchableOpacity: {
      alignItems: "center",
      backgroundColor: "cyan",
      padding: 10,
      borderRadius: 10,
      marginVertical: 10,
    },
    buttonText: {
      color: "black",
    },
   
  });



  

export default TodoDetailsScreen;
