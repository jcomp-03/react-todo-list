import React, { useEffect, Fragment, useState } from "react";
import ToDoItem from "../ToDoItem";
import styleDateAsRequired from "../../assets/utils/formatDate";

function ToDoBoard({ hideTodoBoard, todoList, setTodoList }) {
  // I want to sort my todos by date. This state variable will hold them
  const [sortedList, setSortedList] = useState([]);

 // purpose of this useEffect Hook is to sort the entries in the map object by key (i.e. date)
 useEffect(() => {
  // Pulled this idea of converting Map to Array from online
  const newSortedList = Array.from(todoList.entries());
  // Pulled this sorted list code from online. Grabs the first element
  // from each array, i.e. the date, and compares/sorts them in ascending order
  newSortedList.sort((a, b) => new Date(a[0]) - new Date(b[0]));
  // save the sorted list to state
  setSortedList(newSortedList);
}, [todoList]);

// purpose of this useEffect Hook is to populate the board with existing todo items from database
useEffect(() => {
  fetch("/api/tasks")
    .then((response) => response.json())
    .then((existingTodos) => {
      if (!existingTodos) return;
      // create new Map object
      const newMap = new Map([]);
      // with the fetched todos, add them to the new Map
      existingTodos.forEach( todo => {
        if(newMap.has(todo.taskDate)) {
          const currentDateTasks = newMap.get(todo.taskDate);
          newMap.set(todo.taskDate, [...currentDateTasks, todo]);
        } else {
          newMap.set(todo.taskDate, [todo]);
        }
      })
      setTodoList(newMap);
    })
    .catch((err) => console.log(err));
}, [setTodoList]);

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
