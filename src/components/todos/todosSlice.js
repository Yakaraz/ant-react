import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

const { actions, reducer } = todosSlice;
export const { todoAdded, todoToggled } = actions;
export default reducer;
