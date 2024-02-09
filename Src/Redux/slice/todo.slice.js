import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo-slice',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            const { title, description } = action.payload;
            if (!title.trim() && !description.trim()) {
              alert("Title and Description cannot be empty!");
              
            } else if (!title.trim() && description.trim()) {
              alert("Title cannot be empty!");
            } else if (title.trim() && !description.trim()) {
              alert("Description cannot be empty!");
            } else {
              const existingTodo = state.todos.find(
                (todo) =>
                  todo.title.toLowerCase() === title.toLowerCase() &&
                  todo.description.toLowerCase() === description.toLowerCase()
              );
      
              if (!existingTodo) {
                state.todos.push({
                  id: Date.now().toString(),
                  title,
                  description,
                  completed: false,
                });
              } else {
                console.warn("Todo already exists!");
              
            }
            }
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