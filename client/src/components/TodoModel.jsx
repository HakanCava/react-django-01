import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useTodoContext } from "../context/TodoContext";
import useTodoCall from "../hooks/useTodoCall";

function TodoModel() {
  const {
    show,
    handleClose,
    todo,
    setTodo,

  } = useTodoContext();
  const { putTodo } = useTodoCall();

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title: todo.title,
      description: todo.description,
      is_Done: false,
    };
    // console.log(newTodo);
    // console.log(todo.id);
    putTodo(todo.id, newTodo);

    setTodo({
      title: "",
      description: "",
    });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="edit title"
                autoFocus
                id="title"
                value={todo?.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="edit description"
                id="description"
                value={todo?.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} type="button">
                Close
              </Button>
              <Button variant="primary" onClick={handleClose} type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TodoModel;
