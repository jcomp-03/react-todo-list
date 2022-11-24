import React, { useEffect, Fragment, useState } from "react";
import ToDoItem from "../ToDoItem";
import styleDateAsRequired from "../../assets/utils/formatDate";

function ToDoBoard({ hideTodoBoard, todoList, setTodoList }) {
  // I want to sort my todos by date. This state variable will hold them
  const [sortedList, setSortedList] = useState([]);
  // console.log(hideTodoBoard);
  useEffect(() => {
    // Pulled this idea of converting Map to Array from online
    const newSortedList = Array.from(todoList.entries());
    // Pulled this sorted list code from online. Grabs the first element
    // from each array, i.e. the date, and compares/sorts them in ascending order
    newSortedList.sort((a, b) => new Date(a[0]) - new Date(b[0]));
    // save the sorted list to state
    setSortedList(newSortedList);
  }, [todoList]);

  // this function is used for mapping over with for each element in the sorted list
  // get the second item of each element, i.e. array of todo objects, and return a
  // ToDoItem component
  const renderDateAndTodos = (element, index) => {
    const componentArray = element[1].map((todo, index) => (
      <ToDoItem
        todo={todo}
        todoList={todoList}
        setTodoList={setTodoList}
        key={todo.taskDate + "-" + index}
      />
    ));

    return (
      <Fragment key={element[0]}>
        <span className="section__date">{styleDateAsRequired(element[0])}</span>
        {componentArray}
      </Fragment>
    );
  };

  // component return
  return hideTodoBoard ? (
    <h1 className="show-board">Press purple button to show todos</h1>
  ) : (
    <section className="section">{sortedList.map(renderDateAndTodos)}</section>
  );
}

export default ToDoBoard;
