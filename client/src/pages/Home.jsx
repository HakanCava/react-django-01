import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Badge  from "react-bootstrap/Badge";
import { BsFillSendFill } from "react-icons/bs";
import { useEffect } from "react";
import { useTodoContext } from "../context/TodoContext";
import useTodoCall from "../hooks/useTodoCall";

const Home = () => {
  //! ADD TODO

  const { todo, setTodo } = useTodoContext();
  // console.log(state.todos);
  const { getTodos, postTodo } = useTodoCall();

  useEffect(() => {
    getTodos();
  }, []);

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(todo.title);
    // console.log(todo.description);

    const newTodo = {
      title: todo.title,
      description: todo.description,
      is_Done: false,
    };
    // console.log(newTodo);
    postTodo(newTodo);

    setTodo({
      title: "",
      description: "",
    });
  };
  return (
    <Container>
      <h1 className="text-center">
        <Badge pill className="bg-warning text-danger ">
          Add Your Tutorial
        </Badge>
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your title"
            id="title"
            onChange={handleChange}
            value={todo.title}
            required
          />
          <Form.Text className="text-muted">
            You should title what you're going to do...
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your description"
            id="description"
            onChange={handleChange}
            value={todo.description}
            required
          />
          <Form.Text className="text-muted">
            You should write the content of what you will do..
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          <BsFillSendFill />
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
