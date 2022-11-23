// import React library
import React, { useEffect, useState } from "react";
// import React Select
import Select from "react-select";
// import nanoid
import { nanoid } from "nanoid";

function ToDoForm({ todoList, setTodoList }) {
  const [todo, setTodo] = useState({
    taskTitle: "",
    taskDescription: "",
    taskTags: [],
    taskDate: "",
    taskId: "",
  });

  // options for select element
  const options = [
    { value: "home", label: "Home related" },
    { value: "self-care", label: "Self-care" },
    { value: "medical-appt", label: "Medical appointment" },
    { value: "legal-appt", label: "Legal appointment" },
    { value: "fitness", label: "Fitness & exercise" },
    { value: "for-other", label: "For other" },
    { value: "work", label: "Work related" },
    { value: "vacation", label: "Vacation" },
    { value: "fun-activity", label: "Date or fun activity" },
  ];

  // handle input change from whichever form field...
  const handleInputChange = (event) => {
    // if event is an array, i.e. the select input was changed, update todo state this way
    if (Array.isArray(event)) {
      const tagsArray = event.map((tag) => tag.value);
      setTodo({
        ...todo,
        taskTags: tagsArray,
      });
      return;
    }

    // otherwise update todo state this way
    const target = event.target; 
    const value = target.value; 
    const name = target.name; 

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  // handle form submit
  const handleFormSubmit = (event) => {
    // prevent default behavior
    event.preventDefault();
    // destructure todo object
    const { taskTitle, taskDescription, taskTags, taskDate } = todo;
    // check todo has title, description, tags, and date
    if (taskTitle && taskDescription && taskTags.length && taskDate) {
      console.log("Submitted todo has title, description, date, and tags.");
      // assign id to todo
      todo.taskId = `todo-${nanoid()}`;
      // create new Map object and set it to current todo list
      const newMap = new Map(todoList);
      // if taskDate already exists, return its array of values, otherwise set to empty array
      const currentDateTasks = newMap.get(taskDate) ?? [];
      // update the array of values for the current taskDate
      newMap.set(taskDate, [...currentDateTasks, todo]);
      // update state with new Map object
      setTodoList(newMap)
      // reset the fields
      event.target.reset();
      return;
    } else {
      alert("Missing title, description, tags, or date field.");
      console.log("Missing title, description, tags, or date field.");
    }
   
  };

  useEffect(() => {
    console.log(`todoList is`, todoList);
  }, [todoList])

  // function updateTask(taskDate, taskId, newTitle) {
  //   const newMap = new Map(todoList);
  //   const currentDateTasks = newMap.get(taskDate) ?? [];
  //   const currentTask = currentDateTasks.find(task => task.taskId === taskId);
    
  //   if (currentTask) {
  //     currentTask.title = newTitle;

  //     newMap.set(taskDate, currentDateTasks);
  //     setTodoList(newMap)
  //   }
  // }


  // return the following JSX
  
  
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label htmlFor="taskTitle" className="form__label">
        Task
      </label>
      <input
        id="taskTitle"
        name="taskTitle"
        type="text"
        onChange={handleInputChange}
        className="form__input"
        placeholder="Add a title to your task..."
      />
      <label htmlFor="taskDescription" className="form__label">
        Task Description
      </label>
      <input
        id="taskDescription"
        name="taskDescription"
        type="text"
        onChange={handleInputChange}
        className="form__input"
        placeholder="Add a brief description..."
      />
      <label htmlFor="taskTags" className="form__label">
        Tags
      </label>
      <Select
        unstyled
        onChange={handleInputChange}
        options={options}
        isMulti
        id="taskTags"
        name="taskTags"
        placeholder="Choose a Tag(s)"
        className="form__input form__input--is-quarter-width form__input--is-select-input"
      />
      <label htmlFor="taskDate" className="form__label">
        Select a Date
      </label>
      <input
        id="taskDate"
        name="taskDate"
        type="date"
        onChange={handleInputChange}
        className="form__input form__input--is-quarter-width"
      />
      <button className="btn form__btn" type="submit">
        Submit ToDo
      </button>
    </form>
  );
}

export default ToDoForm;
