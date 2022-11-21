import React, { useEffect, useRef } from "react";
import ToDoItem from "../ToDoItem";
import { makeShortDate } from "../../assets/utils/formatDate";

function ToDoBoard({ todo, setTodo, todoList, setTodoList }) {
  // first time using this Hook, experimenting...
  const mapIter = useRef(null);

  // ultimately want this useEffect dependent on todoList so it
  // runs every timea new todo is added to the list
  useEffect(() => {
    // thinking I"m gonna use a Map for this part
    const map = new Map();
    console.log("map is", map);
    todoList.forEach((todoItem) => {
      // console.log(todoItem.taskDate);
      if (map.has(todoItem.taskDate)) {
        console.log(`Key ${todoItem.taskDate} already exists in map`);
        let priorItems = map.get(todoItem.taskDate);
        console.log(`Key's current value is ${priorItems}`);
        map.set(todoItem.taskDate, [...priorItems, todoItem]);
        console.log(
          `After updating key, value is ${map.get(todoItem.taskDate)}`
        );
      } else {
        map.set(todoItem.taskDate, [todoItem]);
        console.log(`New key ${todoItem.taskDate} added to map`);
      }
    });
    console.log("map size is", map.size);
    mapIter.current = map.entries();
    console.log("mapIter.current is", mapIter.current);
  }, [todoList]);



  const todosList = todoList.map((todo, index) => (
    <ToDoItem todo={todo} key={makeShortDate(todo.taskDate) + "-" + index} />
  ));

  return (
    <section className="section">
      <span className="section__date">March 09</span>
      <ul className="section__ul">{todosList}</ul>
    </section>
  );
}

export default ToDoBoard;
