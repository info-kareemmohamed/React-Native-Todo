import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo} from '../Redux/slice/todo.slice';
import { deleteTodoNotCompleted} from '../Redux/slice/todonotcompleted.slice';
import { deleteTodoCompleted} from '../Redux/slice/todocompleted.slice';

import { TodoDetails } from "../constants";



const NotCompletedTasks = ({ navigation }) => {
    const todos = useSelector((state) => state.notcompleted.todos);
    const dispatch = useDispatch(); 


    const handleDelete = (item) => {
        dispatch(deleteTodo(item));
        dispatch(deleteTodoNotCompleted(item));
        dispatch(deleteTodoCompleted(item));

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
                              
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}
export default NotCompletedTasks;

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    flatList: {
        flexDirection: 'column',
        width: '100%',
    },
    item: {
        backgroundColor: 'cyan',
        flexDirection: 'row',
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