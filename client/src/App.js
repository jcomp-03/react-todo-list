import { useState } from "react";
import Header from "./components/Header";
import ToDoForm from "./components/Form";
import ToDoBoard from "./components/ToDoBoard";
import { nanoid } from "nanoid";

function App() {
  // state variable for showing/hiding todo board
  const [hideTodoBoard, setHideTodoBoard] = useState(false);

  // state for todo list
  const [todoList, setTodoList] = useState(
    new Map([
      [
        "2022-11-29",
        [
          {
            taskDate: "2022-11-29",
            taskDescription: "lorem",
            taskId: `todo-${nanoid()}`,
            taskTags: ["for-other", "work"],
            taskTitle: "Title 4",
          },
        ],
      ],
      [
        "2022-11-28",
        [
          {
            taskDate: "2022-11-28",
            taskDescription: "lorem ipsum",
            taskId: `todo-${nanoid()}`,
            taskTags: ["for-other", "work"],
            taskTitle: "Title 3",
          },
        ],
      ],
      [
        "2022-11-25",
        [
          {
            taskDate: "2022-11-25",
            taskDescription: "lorem ipsum ipsum",
            taskId: `todo-${nanoid()}`,
            taskTags: ["work"],
            taskTitle: "Title 1",
          },
          {
            taskDate: "2022-11-25",
            taskDescription: "lorem lorem",
            taskId: `todo-${nanoid()}`,
            taskTags: ["for-other"],
            taskTitle: "Title 2",
          },
        ],
      ],
    ])
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
