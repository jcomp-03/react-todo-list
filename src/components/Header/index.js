//  import React library
import React from "react";

function Header() {

  return (
    <header className="header">
      <span className="header__span">My ToDo List</span>
      <nav className="header__nav">
        <button className="btn header__btn">Show Tasks Lists</button>
      </nav>
    </header>
  );
}

export default Header;
