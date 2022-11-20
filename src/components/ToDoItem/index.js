import React from "react";
// import the profile image from /src/assets/media/
import profilePicture from '../../assets/media/festive-james-original.jpg';

console.log('profilePicture is', profilePicture);

function ToDoItem() {
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
            <span className="todo__title">Birthday Gift For Nicole</span>
            <span className="todo__description">
              Dont forget to buy her a nice gift. Difficult task, right?
            </span>
          </div>
        </div>
        <div className="li__status">
          <button className="btn btn--is-active">Active</button>
          <button className="btn btn--is-tag">Self-care</button>
          <button className="btn--is-remove-todo">
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
