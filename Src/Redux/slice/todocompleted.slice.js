import { createSlice } from '@reduxjs/toolkit'

const todoCompletedSlice = createSlice({
    name: 'todocompleted-slice',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodoCompleted: (state, action) => {
            state.todos = [...state.todos, action.payload];
            console.log("yas");
            console.log(state.todos);
        },

       
        deleteTodoCompleted: (state, action) => {
            const item = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== item.id);
        },
    },
});

export const {addTodoCompleted,deleteTodoCompleted} = todoCompletedSlice.actions;

export default todoCompletedSlice;