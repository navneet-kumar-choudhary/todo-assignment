import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { ADD_TODO, DELETE_TODO } from "../actions/actionTypes";

function Home() {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo && Object.keys(todo).length) {
      dispatch({
        type: ADD_TODO,
        payload: { id: Date.now(), title: todo },
      });
      return setTodo("");
    }
  };

  const deleteTodo = (id) => {
    return dispatch({
      type: DELETE_TODO,
      payload: { id },
    });
  };

  return (
    <div className="screen home-container">
      <Fade top>
        <div className="add-todo">
          <textarea
            placeholder="Add something..."
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button onClick={addTodo}>
            <i className="fa fa-plus-circle" />
            <p>Add todo</p>
          </button>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="todo-list">
          {todoList.map((todo) => (
            <div key={todo.id} className="todo-item">
              <div className="todo-item-buttons">
                <button
                  // style={{ backgroundColor: "red" }}
                  onClick={() => deleteTodo(todo.id)}
                >
                  <i className="fa fa-times" />
                </button>
              </div>
              <p>{todo.title}</p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default Home;
