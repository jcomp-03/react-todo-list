// import React library
import React, { useEffect } from "react";
// import React Select
import Select from "react-select";
// import utility function for date
import convertToDateString from "../../assets/utils/formatDate";

function ToDoForm({ todo, setTodo, todoList, setTodoList }) {
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
    // const value = target.name === 'taskDate' ? new Date(`${target.value}`) : target.value;
    const name = target.name;

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // destructure todo object
    const { taskTitle, taskDescription, taskTags, taskDate, taskId } = todo;
    // check todo has title, description, and tags
    if (taskTitle && taskDescription && taskTags.length) {
      console.log("Submitted todo has title, description, and tags.");
      // sort existing todoList with new todo
      // This sorting took an unreal amount of time to implement correctly.
      // Ultimately went with this simple but not super performant solution found online
      let sortProperty = "taskDate";
      let sortedArray = [...todoList, todo].sort((a, b) => {
        return new Date(a[sortProperty]) - new Date(b[sortProperty]);
      });
      // updated todolist state with sorted array
      setTodoList([...sortedArray]);
      event.target.reset();
      return;
    }
    console.log("Missing title, description, or tags.");
  };

  useEffect(() => {
    console.log("todoList updated", todoList);
  }, [todoList]);

  useEffect(() => {
    console.log("todo updated", todo);
  }, [todo]);

  // return the following JSX
  return (
    <form className="form" onSubmit={handleSubmit}>
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
