import React from "react";
import ToDoItem from '../ToDoItem';

function ToDoBoard({ todo, setTodo, todoList, setTodoList }) {

  return (
    <section className="section">
      <span className="section__date">March 09</span>
      <ul className="section__ul">
        ({
          todoList.map((value, index) => {
            return console.log(value, index);
          })
        })
        <ToDoItem />
        <ToDoItem />
      </ul>
    </section>
  );
}


export default ToDoBoard;