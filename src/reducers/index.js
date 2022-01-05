import { combineReducers } from "redux";
import { sessionReducer } from "./session";
import { todoListReducer } from "./todo";

const rootReducer = combineReducers({
  session: sessionReducer,
  todoList: todoListReducer
});

export default rootReducer;
