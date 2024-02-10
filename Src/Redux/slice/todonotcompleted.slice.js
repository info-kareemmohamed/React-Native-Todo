import { createSlice } from '@reduxjs/toolkit'

const todoNotCompletedSlice = createSlice({
    name: 'todoNotcompleted-slice',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodoNotCompleted: (state, action) => {
            state.todos = [...state.todos, action.payload];
            
        },

       
        deleteTodoNotCompleted: (state, action) => {
            const item = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== item.id);
            console.log(item.title);
        },

        
        updateTodoNotCompleted: (state, action) => {
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

export const {addTodoNotCompleted,deleteTodoNotCompleted,updateTodoNotCompleted} = todoNotCompletedSlice.actions;

export default todoNotCompletedSlice;