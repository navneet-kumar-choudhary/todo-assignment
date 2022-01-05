import React, { useEffect,useState } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/session";


export default function Login({ history }) {
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();

  const [form,setForm] =useState({
    email:"",
    password:""
  })

  const handleChange =(e)=>{
    e.preventDefault()
    const {name,value}=e.target;
    return setForm({...form,[name]:value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
return  dispatch(login())
  }

  useEffect(
    () => {
      if (session.isAuthenticated) {
        history.push(`/`);
      }
    },
    [session, history]
  );


  return (
    <div className="login-screen">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
        <input type={"email"} placeholder="Email" name="email" value={form.email} onChange={handleChange} defaultValue="abcd@gmail.com" />
        <input type={"password"} style={{marginTop:"5px"}} placeholder="Password" name="password" value={form.password} onChange={handleChange}  defaultValue="todoList123" />
        <button
          className="login-button"
          type="submit"
          onClick={handleSubmit}
        
        >
          Login
        </button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired
  }).isRequired
};
