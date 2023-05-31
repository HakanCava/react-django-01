import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import TodoProvider from "./context/TodoContext";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <Container>
        <Home />
        <TodoList/>
      </Container>
    </TodoProvider>
  );
}

export default App;
