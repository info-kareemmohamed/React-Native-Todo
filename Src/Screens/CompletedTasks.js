import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';


const CompletedTasksScreen = ({ navigation }) => {
    const [todos, setTodos] = useState([
        { title: 'hi', description: "bb", id: 5, completed: false }
    ]);



    return (
        <View>
            <FlatList
                style={styles.flatList}
                data={todos}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('TodoDetails', { todos: item })
                        }
                    >
                        <View style={styles.item}>
                            <View>
                                <Text style={styles.text}>{item.title}</Text>
                                <Text style={styles.text}>{item.description}</Text>
                            </View>
                            <View style={styles.icon}>
                                <FontAwesome
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
export default CompletedTasksScreen;

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