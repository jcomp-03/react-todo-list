import { useState } from "react";
import Header from "./components/Header";
import ToDoForm from "./components/Form";
import ToDoBoard from "./components/ToDoBoard";

function App() {
  // state variable for showing/hiding todo board
  const [hideTodoBoard, setHideTodoBoard] = useState(false);

  // state for todo list
  const [todoList, setTodoList] = useState(
    new Map([])
  );

  return (
    <>
      <Header
        hideTodoBoard={hideTodoBoard}
        setHideTodoBoard={setHideTodoBoard}
      />
      <ToDoForm todoList={todoList} setTodoList={setTodoList} />
      <ToDoBoard
        hideTodoBoard={hideTodoBoard}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </>
  );
}

export default App;
