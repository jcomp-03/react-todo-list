import React, { useEffect, Fragment, useState } from "react";
import ToDoItem from "../ToDoItem";
import { makeShortDate } from "../../assets/utils/formatDate";

function ToDoBoard({ todoList, setTodoList }) {
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    // Pulled this idea of converting Map to Array from online
    const newSortedList = Array.from(todoList.entries());
    // Pulled this sorted list code from online
    newSortedList.sort((a, b) => new Date(a[0]) - new Date(b[0]));
    setSortedList(newSortedList);
  }, [todoList]);

  const renderDateAndTodos = (element, index) => {
    const componentArray = element[1].map((todo, index) => (
      <ToDoItem
        todo={todo}
        todoList={todoList}
        setTodoList={setTodoList}
        key={makeShortDate(todo.taskDate) + "-" + index}
      />
    ));

    return (
      <Fragment key={element[0]}>
        <span className="section__date">{element[0]}</span>
        {componentArray}
      </Fragment>
    );
  };

  // component return
  return (
    <section className="section">{sortedList.map(renderDateAndTodos)}</section>
  );
}

export default ToDoBoard;
