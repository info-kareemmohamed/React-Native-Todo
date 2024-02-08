import  React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
export default function AddTodoScreen({navigation}) {
   
    return (
        <View style={styles.container}>
        <Text style={styles.text}>TODO APP</Text>
        <TextInput style={styles.input} placeholder="Title" />
        <TextInput style={styles.input} placeholder="Description" />
        <TouchableOpacity style={styles.touchableOpacity}>
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
    flatList: {
      width: "100%",
    },
    item: {
      backgroundColor: "cyan",
      padding: 10,
      marginVertical: 5,
      borderRadius: 20,
    
    },
  });


