import React from "react";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import ToDoItem from "..";

afterEach(cleanup);

// Test #1
it("renders successfully", () => {
  const todo = {
    taskTitle: "Title 1",
    taskDescription: "lorem ipsum",
    taskTags: ["self-care", "home"],
    taskDate: "2022-11-28",
  };

  render(<ToDoItem todo={todo}/>);
});

// Test #2
