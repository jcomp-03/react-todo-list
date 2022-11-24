//  import React library
import React from "react";

function Header({ hideTodoBoard, setHideTodoBoard }) {

  const handleClick = () => {
    hideTodoBoard ? setHideTodoBoard(false) : setHideTodoBoard(true);
  };

  return (
    <header className="header">
      <span className="header__span">My ToDo List</span>
      <nav className="header__nav">
        <button className="btn header__btn" onClick={handleClick}>
          {hideTodoBoard ? "Show Tasks List" : "Hide Tasks List"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
