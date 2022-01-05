import { LOGGED_IN_USER, LOGOUT } from "./actionTypes";


export const login = () => {
  return {
    type:LOGGED_IN_USER,
    payload:{}
  }
};

export const logout = () =>{
  return {
    type:LOGOUT,
    payload:{}
  }
}
 

