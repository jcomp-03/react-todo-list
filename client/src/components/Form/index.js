import React, { useEffect, useState } from "react";
import Select from "react-select";
import { nanoid } from "nanoid";

function ToDoForm({ todoList, setTodoList }) {
  // moved todo state variable into this component since it should belong
  // strictly to this component
  const [todo, setTodo] = useState({
    taskTitle: "",
    taskDescription: "",
    taskTags: [],
    taskDate: "",
    taskId: "",
  });

  // state variable for select element, basically an array of
  // objects with two properties: value and label
  const [selectedOption, setSelectedOption] = useState(null);

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

  // handle input change all inputs except select element...
  const handleInputChange = (event) => {
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
    const { taskTitle, taskDescription, taskDate } = todo;
    // check todo has title, description, tags, and date
    // if (taskTitle && taskDescription && taskTags.length && taskDate) {
    if (taskTitle && taskDescription && taskDate && selectedOption) {
      console.log("Submitted todo has title, description, date, and tags.");
      // get tags from selectedOption
      const tagsArray = selectedOption.map((tag) => tag.value);
      // assign id to todo
      const nanoId = `todo-${nanoid()}`;
      const todoWithIdAndTags = {
        ...todo,
        taskId: nanoId,
        taskTags: tagsArray,
      };
      // create new Map object and set it to current todo list
      const newMap = new Map(todoList);
      // if taskDate already exists, return its array of values, otherwise set to empty array
      const currentDateTasks = newMap.get(taskDate) ?? [];
      // update the array of values for the current taskDate
      newMap.set(taskDate, [...currentDateTasks, todoWithIdAndTags]);
      // update state with new Map object
      setTodoList(newMap);
      // reset the inputs
      event.target.reset();
      // reset the select element
      setSelectedOption([]);
      // add to database
      fetch("/api/tasks", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoWithIdAndTags),
      })
        .then((response) => response.json())
        .then((postResponse) => console.log(postResponse))
        .catch((err) => console.log(err));
      // jump out of function
      return;
    } else {
      alert("Missing title, description, tags, or date field.");
      console.log("Missing title, description, tags, or date field.");
    }
  };

  useEffect(() => {
    console.log(`todoList is`, todoList);
  }, [todoList]);

  // component return
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
        onChange={setSelectedOption}
        defaultValue={selectedOption}
        value={selectedOption}
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
