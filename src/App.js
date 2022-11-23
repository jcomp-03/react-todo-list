import { useState } from "react";
// import React components
import Header from "./components/Header";
import ToDoForm from "./components/Form";
import ToDoBoard from "./components/ToDoBoard";
import { nanoid } from "nanoid";

function App() {
  // state for todo object
  // const [todo, setTodo] = useState({
  //   taskTitle: "",
  //   taskDescription: "",
  //   taskTags: [],
  //   taskDate: "",
  //   taskId: "",
  // });

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
        "2022-09-16",
        [
          {
            taskDate: "2022-09-16",
            taskDescription: "lorem ipsum ipsum",
            taskId: `todo-${nanoid()}`,
            taskTags: ["work"],
            taskTitle: "Title 1",
          },
          {
            taskDate: "2022-09-16",
            taskDescription: "lorem lorem",
            taskId: `todo-${nanoid()}`,
            taskTags: ["for-other"],
            taskTitle: "Title 2",
          },
        ],
      ]
    ])
  );

  return (
    <>
      <Header />
      <ToDoForm
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <ToDoBoard
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </>
  );
}

export default App;
