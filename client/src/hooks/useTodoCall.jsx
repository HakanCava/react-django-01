import { useTodoContext } from "../context/TodoContext";
import { FetchFail, FetchStart, GET_TODO } from "../types/types";
import axios from "axios";

const useTodoCall = () => {
  const { dispatch } = useTodoContext();

  const BASE_URL = "http://localhost:8000/tutorials/";

  const getTodos = async () => {
    dispatch({ type: FetchStart });

    try {
      const { data } = await axios(BASE_URL);
      dispatch({ type: GET_TODO, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: FetchFail });
    }
  };

  const postTodo = async (info) => {
    console.log(info);
    dispatch({ type: FetchStart });
    try {
      await axios.post(BASE_URL, info);
      getTodos();
    } catch (error) {
      console.log(error);
      dispatch({ type: FetchFail });
    }
  };

  const deleteTodo = async (id) => {
    console.log(id);
    dispatch({ type: FetchStart });
    try {
      await axios.delete(`${BASE_URL}${id}/`);
      getTodos();
    } catch (error) {
      console.log(error);
      dispatch({ type: FetchFail });
    }
  };
  const putTodo = async (id, info) => {
    console.log(id);
    dispatch({ type: FetchStart });
    try {
      await axios.put(`${BASE_URL}${id}/`, info);
      getTodos();
    } catch (error) {
      console.log(error);
      dispatch({ type: FetchFail });
    }
  };

  return {
    getTodos,
    postTodo,
    deleteTodo,
    putTodo,
  };
};

export default useTodoCall;
