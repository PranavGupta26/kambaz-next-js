import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ---------------------------
// Type Definitions
// ---------------------------
export interface Todo {
  id: string;
  title: string;
}

// State type
interface TodosState {
  todos: Todo[];
  todo: Partial<Todo>; // for the form state, id may be missing
}

// ---------------------------
// Initial State
// ---------------------------
const initialState: TodosState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
};

// ---------------------------
// Slice
// ---------------------------
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Partial<Todo>>) => {
      const newTodo: Todo = {
        ...action.payload,
        id: new Date().getTime().toString(), // generate ID
        title: action.payload.title || "",
      };
      state.todos.push(newTodo);
      state.todo = { title: "" }; // reset form
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      state.todo = { title: "" }; // reset form
    },

    setTodo: (state, action: PayloadAction<Partial<Todo>>) => {
      state.todo = action.payload;
    },
  },
});

// ---------------------------
// Exports
// ---------------------------
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;
