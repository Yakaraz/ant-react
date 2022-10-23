import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from "./components/todos/todosSlice";

export default combineReducers({ todos: todosReducer });
