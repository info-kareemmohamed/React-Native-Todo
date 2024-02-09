import { createSlice } from '@reduxjs/toolkit'

const todoNotCompletedSlice = createSlice({
    name: 'todoNotcompleted-slice',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodoNotCompleted: (state, action) => {
            state.todos = [...state.todos, action.payload];
            console.log("yas");
            console.log(state.todos);
        },

       
        deleteTodoNotCompleted: (state, action) => {
            const item = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== item.id);
        },
    },
});

export const {addTodoNotCompleted,deleteTodoNotCompleted} = todoNotCompletedSlice.actions;

export default todoNotCompletedSlice;