import React, { useEffect, useRef } from "react";
import ToDoItem from "../ToDoItem";
import { makeShortDate } from "../../assets/utils/formatDate";

function ToDoBoard({ todo, setTodo, todoList, setTodoList }) {
  // create a Map object
  const map = new Map();

  todoList.forEach((todoItem) => {
    // for each todo item in the list, check if the date already exists in the map
    // if it doesn't, add the date/todo item pair to the map
    if (map.has(todoItem.taskDate)) {
      console.log(`Key ${todoItem.taskDate} already exists in map`);
      let priorItems = map.get(todoItem.taskDate);
      // console.log(`Key's current value is ${priorItems}`);
      map.set(todoItem.taskDate, [...priorItems, todoItem]);
      // console.log(
      //   `After updating key, value is ${map.get(todoItem.taskDate)}`
      // );
    } else {
      map.set(todoItem.taskDate, [todoItem]);
      console.log(`New key ${todoItem.taskDate} added to map`);
    }
  });

  console.log(map);
  // runs every time a new todo is added to the list
  // useEffect(() => {
  //   console.log(`useEffect ran ${count.current}.`);
  //   count.current = count.current + 1;
  //   // if (initialRender) {
  //   //   initialRender.current = false;
  //   // } else {
  //   // const map = new Map();
  //   // console.log("map is", map);
  //   todoList.forEach((todoItem) => {
  //     // console.log(todoItem.taskDate);
  //     if (map.has(todoItem.taskDate)) {
  //       console.log(`Key ${todoItem.taskDate} already exists in map`);
  //       let priorItems = map.get(todoItem.taskDate);
  //       // console.log(`Key's current value is ${priorItems}`);
  //       map.set(todoItem.taskDate, [...priorItems, todoItem]);
  //       // console.log(
  //       //   `After updating key, value is ${map.get(todoItem.taskDate)}`
  //       // );
  //     } else {
  //       map.set(todoItem.taskDate, [todoItem]);
  //       console.log(`New key ${todoItem.taskDate} added to map`);
  //     }
  //   });
  //   console.log("map size is", map.size);
  //   // mapIter.current = map.entries();
  //   // console.log("mapIter.current is", mapIter.current);
  // }, [todoList]);

  const arrayFromMap = Array.from(map);
  console.log(arrayFromMap);

  const renderDateAndTodos = (element, index) => {
    const componentArray = element[1].map((todo, index) => (
      <ToDoItem todo={todo} key={makeShortDate(todo.taskDate) + "-" + index} />
    ));

    return (
      <>
        <span className="section__date" key={element[0]}>{element[0]}</span>
        {componentArray}
      </>
    );
  };

  // component return
  return (
    <section className="section">
      {arrayFromMap.map(renderDateAndTodos)}
    </section>
  );
}

export default ToDoBoard;
