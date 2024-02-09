import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/slice/todo.slice";


import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
export default function AddTodoScreen({navigation}) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const addTodoToStore = () => {
    const obj = {id: Date.now(), title:title, description:description,completed:false};
    dispatch(addTodo(obj));
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, marginTop: 20, fontWeight: '600'}}>Todo App</Text>
      <TextInput placeholder="Enter todo title" style={styles.input} onChangeText={(value) => setTitle(value)} />
      <TextInput placeholder="Enter todo description" style={styles.input} onChangeText={(value) => setDescription(value)}  />
      <TouchableOpacity style={styles.touchableOpacity} onPress={addTodoToStore}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    
    </View>
  );
  }

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


