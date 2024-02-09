import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo-slice',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
            console.log("yas");
            console.log(state.todos);
        },

        toggleCompleted: (state, action) => {
            const { id } = action.payload;
            state.todos = state.todos.map(todo => {
                console.log(id +"    "+ todo.id);
                if (todo.id === id) {
                    
                    return { ...todo, completed: !todo.completed };
                }

                return todo;
            });
            console.log(state.todos);
        },
        deleteTodo: (state, action) => {
            const item = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== item.id);
        },

        updateTodo: (state, action) => {
            const updatedTodo = action.payload;
            state.todos = state.todos.map(todo => {
                if (todo.id === updatedTodo.id) {
                    return {
                        ...todo,
                        title: updatedTodo.title,
                        description: updatedTodo.description
                    };
                }
                return todo;
            });
        },
    },
});

export const {addTodo,toggleCompleted,deleteTodo,updateTodo} = todoSlice.actions;

export default todoSlice;