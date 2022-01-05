import { FETCH_TODO_LIST,ADD_TODO,DELETE_TODO } from "../actions/actionTypes";

const initialState =[]

export function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO_LIST: {
      return state;
    }
    case ADD_TODO:{
      return [...state,action.payload]
    }
    case DELETE_TODO:{
return state.filter(todo=>todo.id!==action.payload.id)
    }
    default: {
      return state;
    }
  }
}
