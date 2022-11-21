import React from "react";
// import the profile image from /src/assets/media/
import profilePicture from "../../assets/media/festive-james-original.jpg";
console.log("profilePicture is", profilePicture);

function ToDoItem({ todo }) {
  // console.log('todoItem', todo);
  const { taskTitle, taskDescription, taskTags, taskDate } = todo;

  const handleRemoveClick = (e) => {
    console.log(e);
    console.log('Remove button pressed');
  }

  return (
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
          {
            taskTags.map((tag, index) => {
              return <button className="btn btn--is-tag" key={tag}>{tag}</button>;
            })
          }
          <button className="btn--is-remove-todo" onClick={(event) => handleRemoveClick(event)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button className="btn--is-edit-todo">
            <i className="fa-solid fa-pen"></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default ToDoItem;
