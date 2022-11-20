//  import React library
import React, { useEffect, useState } from "react";

function ToDoForm() {
  // state for todo object
  const [todo, setTodo] = useState({
    taskTitle: "",
    taskDescription: "",
    taskTags: [],
    taskDate: new Date().toDateString(),
  });


  // handle the change in input from whichever form field...
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    // const value = target.name === 'taskTags' ? console.log('taskTags') : target.value;
    const name = target.name;

    console.log(`Target: ${target} \n Name: ${name} \n Value: ${value}`);
    
    // update todo state
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  useEffect( () => {
    console.log('useEffect was triggered hooray!')
    console.log(todo);
  }, [todo]);

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit button clicked');
  }

  // return the following JSX
  return (
    <form className="form" onSubmit={(handleSubmit)}>
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
      <select
        id="taskTags"
        name="taskTags"
        value={todo.taskTags}
        onChange={handleInputChange}
        multiple={true}
        className="form__input form__input--is-quarter-width"
      >
        <option value="">Choose a Tag(s)</option>
        <option value="home">Home Related</option>
        <option value="self-care">Self-care</option>
        <option value="medical-appointment">Medical Appointment</option>
        <option value="legal-appointment">Legal Appointment</option>
        <option value="fitness">Fitness & Exercise</option>
        <option value="for-other">For Other</option>
        <option value="work">Work Related</option>
        <option value="vacation">Vacation</option>
        <option value="fun-activity">Date or Fun Activity</option>
      </select>
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
