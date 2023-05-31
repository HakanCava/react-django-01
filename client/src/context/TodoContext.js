import { createContext, useContext, useState } from "react";
import { reducer, initialState } from "../context/reducer";
import { useReducer } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const [state,dispatch]=useReducer(reducer,initialState)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const values = {
    todo,
    setTodo,
    state,
    dispatch,
    show,
    setShow,
    handleClose,
    handleShow,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};


export const useTodoContext=()=>useContext(TodoContext)

export default TodoProvider