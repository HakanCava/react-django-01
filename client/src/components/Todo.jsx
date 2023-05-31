import { useTodoContext } from "../context/TodoContext";
import Table from "react-bootstrap/Table";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import useTodoCall from "../hooks/useTodoCall";
import TodoModel from "./TodoModel";

const Todo = () => {
  const { state, handleShow, setTodo } = useTodoContext();
  const { deleteTodo , putTodo} = useTodoCall();
  // console.log(state.todos[0]);
 

  return (
    <>
      {state.loading && <>Loading</>}
      {state.error && <>Something went wrong</>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {state.todos[0]?.map((item) => {
            console.log(item);
            const { id, title, description, is_Done } = item;

            return (
              <tr
                key={id}
                onClick={() => {
                
                  putTodo(id,{title,description,is_Done:!is_Done})
                  
                }}
                className={`${is_Done &&"isDone"} `}
              >
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <FaEdit
                    size={20}
                    type="button"
                    variant="primary"
                    onClick={() => {
                      setTodo(item);
                      handleShow();
                    }}
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    onClick={() => deleteTodo(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <TodoModel />
    </>
  );
};

export default Todo;
