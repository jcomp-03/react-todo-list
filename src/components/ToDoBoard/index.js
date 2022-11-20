import React from "react";
import ToDoItem from '../ToDoItem';

function ToDoBoard() {

  return (
    <section className="section">
      <span className="section__date">March 09</span>
      <ul className="section__ul">
        <ToDoItem />
        <ToDoItem />
      </ul>
    </section>
  );
}


export default ToDoBoard;