import { useState } from 'react';
// import React components
import Header from './components/Header';
import ToDoForm from './components/Form';
import ToDoBoard from './components/ToDoBoard'

function App() {
    // state for todo object
    const [todo, setTodo] = useState({
      taskTitle: "",
      taskDescription: "",
      taskTags: [],
      taskDate: new Date().toDateString(),
      taskId: ""
    });

    // state for todo list
    const [todoList, setTodoList] = useState([
      {
        taskTitle: "Title 1",
        taskDescription: "lorem ipsum Est consequat",
        taskTags: ['self-care', 'home'],
        taskDate: new Date('11-28-2022').toDateString(),
        taskId: "123456789"
      },
      {
        taskTitle: "Title 2",
        taskDescription: "lorem ipsum Est consequat laboris officia",
        taskTags: ['for-other', 'work'],
        taskDate: new Date('12-01-2022').toDateString(),
        taskId: "123456789"
      }

    ]);

  return (
    <>
    <Header />
    <ToDoForm todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
    <ToDoBoard todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
