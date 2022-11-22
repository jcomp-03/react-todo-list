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
      taskDate: "",
      taskId: ""
    });

    // state for todo list
    const [todoList, setTodoList] = useState([
      {
        taskTitle: "Title 5",
        taskDescription: "lorem ipsum",
        taskTags: ['medical-appt'],
        taskDate: '2023-01-01',
      },
      {
        taskTitle: "Title 1",
        taskDescription: "lorem ipsum",
        taskTags: ['self-care', 'home'],
        taskDate: '2022-11-28',
      },
      // {
      //   taskTitle: "Title 1.5",
      //   taskDescription: "Est consequat",
      //   taskTags: ['fun-activity'],
      //   taskDate: '2022-11-28',
      // },
      {
        taskTitle: "Title 3",
        taskDescription: "Est consequat laboris",
        taskTags: ['legal-appt'],
        taskDate: '2022-12-01',
      },
      {
        taskTitle: "Title 4",
        taskDescription: "Est consequat laboris officia",
        taskTags: ['fitness', 'fun-activity', 'legal-appt'],
        taskDate: '2022-12-01',
      },
      {
        taskTitle: "Title 2",
        taskDescription: "lorem",
        taskTags: ['for-other', 'work'],
        taskDate: '2022-11-29',
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
