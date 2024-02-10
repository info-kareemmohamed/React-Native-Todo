import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompleted ,deleteTodo} from '../Redux/slice/todo.slice';
import { addTodoCompleted , deleteTodoCompleted} from '../Redux/slice/todocompleted.slice';
import { addTodoNotCompleted , deleteTodoNotCompleted} from '../Redux/slice/todonotcompleted.slice';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { TodoDetails, screenWidth } from "../constants";

const HomeScreen = ({ navigation }) => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch(); 

  
    const handleToggleCompleted = (item) => {
        dispatch(toggleCompleted(item));
      if(item.completed !=true){  
      dispatch(addTodoCompleted(item)) 
      dispatch(deleteTodoNotCompleted(item)) 

    }
      else{ 
      dispatch(deleteTodoCompleted(item));
      dispatch(addTodoNotCompleted(item));
      }
    };
    const handleDelete = (item) => {
        dispatch(deleteTodo(item));
       dispatch(deleteTodoCompleted(item));
       dispatch(deleteTodoNotCompleted(item));
        
    };

    return (
        
        <View>
        
        
            <FlatList
                style={styles.flatList}
                data={todos}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate(TodoDetails, { todo: item })
                        }
                    >
                        <View style={styles.item}>
                            <View>
                                <Text style={styles.text}>{item.title}</Text>
                                <Text style={styles.text}>{item.description}</Text>
                            </View>
                            <View style={styles.icon}>
                                <FontAwesome
                                   onPress={() => handleDelete(item)} 
                                    name="trash"
                                    size={20}
                                    color="red"
                                    style={styles.icon}
                                />
                                <FontAwesome
                                    onPress={() => handleToggleCompleted(item)} 
                                    name="check-circle"
                                    size={20}
                                    color={item.completed ? 'green' : 'black'}
                                    style={styles.icon}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    flatList: {
        flexDirection: 'column',
        width: '100%',
    },
    item: {
        backgroundColor: 'cyan',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        marginVertical: 5,
        borderRadius: 20,
    },
    icon: {
        flexDirection: 'row',
        marginLeft: 'auto',
        paddingLeft: 20,
        paddingRight: 6,
        fontSize: 30,
    },
});