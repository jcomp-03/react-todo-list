//  import React library
import React, { useEffect, useState } from "react";
// import React Select
import Select from 'react-select';
// import utility function for date
import convertToDateString from '../../assets/utils/formatDate';

function ToDoForm() {
  // state for todo object
  const [todo, setTodo] = useState({
    taskTitle: "",
    taskDescription: "",
    taskTags: [],
    taskDate: new Date().toDateString(),
  });

  // options for select element
  const options = [
    { value: 'home', label: 'Home related' },
    { value: 'self-care', label: 'Self-care' },
    { value: 'medical-appt', label: 'Medical appointment' },
    { value: 'legal-appt', label: 'Legal appointment' },
    { value: 'fitness', label: 'Fitness & exercise' },
    { value: 'for-other', label: 'For other' },
    { value: 'work', label: 'Work related' },
    { value: 'vacation', label: 'Vacation' },
    { value: 'fun-activity', label: 'Date or fun activity' }
  ];

  // handle the change in input from whichever form field...
  const handleInputChange = (event) => {
    console.log('event is', event, typeof event);
    // if the event has length i.e. is an array, run this
    if(event.length) {
      const tagsArray = event.map(tag => tag.value)
      setTodo({
        ...todo,
        taskTags: tagsArray
      })
      return;
    }
    const target = event.target;
    // const value = target.value;
    const value = target.name === 'taskDate' ? convertToDateString(target.value) : target.value;
    const name = target.name;
    // otherwise, update todo state
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
      <Select
        value={todo.taskTags}
        onChange={handleInputChange}
        options={options}
        isMulti
        id="taskTags"
        name="taskTags"
        placeholder="Choose a Tag(s)"
        className="form__input form__input--is-quarter-width"
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
