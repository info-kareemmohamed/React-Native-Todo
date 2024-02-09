import React, { useState } from 'react';
import { StyleSheet, View, TextInput,  Alert ,Text, TouchableOpacity} from 'react-native';

const TodoDetailsScreen = ({}) => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
  
    const handleButtonPress = () => {
   
      Alert.alert('Button Pressed', `Text 1: ${text1}, Text 2: ${text2}`);
    };
  
    return (
        <View style={styles.container}>
                 <Text style={styles.text}>TODO APP</Text>

          <TextInput
            style={styles.input}
            placeholder="Title"
            value={text1}
            onChangeText={(text) => setText1(text)}
          />
    
        
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={text2}
            onChangeText={(text) => setText2(text)}
          />
    
          
    <TouchableOpacity style={styles.touchableOpacity}>
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
