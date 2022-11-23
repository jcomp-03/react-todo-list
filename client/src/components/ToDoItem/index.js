import React, { useState } from "react";
import profilePicture from "../../public/assets/media/festive-james-original.jpg";

function ToDoItem({ todo, todoList, setTodoList }) {
  // state variable to determine which template to render. Idea pulled from online
  const [isEditing, setIsEditing] = useState(false);
  // make another state variable for editing task title/description
  const [componentTodo, setComponentTodo] = useState({ ...todo });
  // destructure todo
  const { taskDate, taskDescription, taskId, taskTags, taskTitle } = todo;

  const handleRemoveTodo = (date, id) => {
    const newMap = new Map(todoList);
    // get list of todos
    const currentDateTodos = newMap.get(date);
    // if the date has just a single todo, remove the date and todo
    if (currentDateTodos.length === 1) {
      newMap.delete(date);
      setTodoList(newMap);
      return;
    }
    // get index of todo and splice it from array
    let index = currentDateTodos.findIndex((todo) => todo.taskId === id);
    currentDateTodos.splice(index, 1);
    // now that todo is gone, update key-value pair in map
    newMap.set(date, [...currentDateTodos]);
    // and update state with new Map object
    setTodoList(newMap);
  };

  const handleInputChange = (event) => {

    const target = event.target;
    const value = target.value;
    console.log(value);
    const name = target.name;
    console.log(name);
    // as user updates the todo, set it in state
    setComponentTodo({
      ...componentTodo,
      [name]: value,
    });
  };

  const handleTodoSubmit = (event) => {
    // prevent default behavior
    event.preventDefault();
    // destructure todo object
    const { taskId, taskDate } = todo;
    // check componentTodo has title & description
    if (componentTodo.taskTitle && componentTodo.taskDescription) {
      console.log("Updated todo has title & description.");
      // create new Map object and set it to current todo list
      const newMap = new Map(todoList);
      // get the value stored for the current taskDate
      const currentDateTasks = [...newMap.get(taskDate)];
      const currentTodoObject = currentDateTasks.find(
        (task) => task.taskId === taskId
      );
      currentTodoObject.taskTitle = componentTodo.taskTitle;
      currentTodoObject.taskDescription = componentTodo.taskDescription;
      // update the value for the current taskDate
      newMap.set(taskDate, currentDateTasks);
      // update state with new Map object
      setTodoList(newMap);
      // go back to viewTemplate
      setIsEditing(false);
    } else {
      alert("Missing title or description in edit context.");
      console.log("Missing title or description in edit context.");
    }
  };

  // render this template when isEditing is set to false (default)
  const viewTemplate = (
    <li className="li">
      <div className="li__div">
        <div className="li__content">
          <input className="li__input" type="checkbox" />
          <img
            className="li__image"
            src={profilePicture}
            alt="Just some alternate text."
          />
          <div className="todo">
            <span className="todo__title">{taskTitle}</span>
            <span className="todo__description">{taskDescription}</span>
          </div>
        </div>
        <div className="li__status">
          <button className="btn btn--is-active">Active</button>
          {taskTags.map((tag, index) => {
            return (
              <button className="btn btn--is-tag" key={tag}>
                {tag}
              </button>
            );
          })}
          <button
            className="btn--is-remove-todo"
            onClick={() => handleRemoveTodo(taskDate, taskId)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button
            className="btn--is-edit-todo"
            onClick={() => setIsEditing(true)}
          >
            <i className="fa-solid fa-pen"></i>
          </button>
        </div>
      </div>
    </li>
  );

  // render this template when isEditing is set to true
  const editTemplate = (
    <li className="li">
      <div className="li__div">
        <div className="li__content">
          <input className="li__input" type="checkbox" />
          <img
            className="li__image"
            src={profilePicture}
            alt="Just some alternate text."
          />
          <div className="todo">
            <form className="todo__form" onSubmit={handleTodoSubmit}>
              <label htmlFor="editTaskTitle" className="todo__form__label">
                Enter new title below
              </label>
              <input
                id="editTaskTitle"
                name="taskTitle"
                type="text"
                onChange={handleInputChange}
                className="todo__form__input"
                placeholder=""
              />
              <label
                htmlFor="editTaskDescription"
                className="todo__form__label"
              >
                Enter new description below
              </label>
              <input
                id="editTaskDescription"
                name="taskDescription"
                type="text"
                onChange={handleInputChange}
                className="todo__form__input"
                placeholder=""
              />
              <div className="btn-group">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </li>
  );

  // component return
  return <>{isEditing ? editTemplate : viewTemplate}</>;
}

export default ToDoItem;
