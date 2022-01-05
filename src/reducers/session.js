import { LOGGED_IN_USER, LOGOUT } from "../actions/actionTypes";

const initialState ={
  isAuthenticated:false
}

export const sessionReducer = ( state =initialState, { type, payload }) => {
  switch (type) {
    case LOGGED_IN_USER:
      return {isAuthenticated:true};
    case LOGOUT:
      return {isAuthenticated:false};
    default: {
      return state;
    }
  }
};
