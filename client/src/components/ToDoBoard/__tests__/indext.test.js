import React, { useState } from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToDoBoard from "..";

afterEach(cleanup);

const hideTodoBoard = false;
const [todoList, setTodoList] =
  new Map([
    [
      "2022-11-29",
      [
        {
          taskDate: "2022-11-29",
          taskDescription: "lorem",
          taskId: `todo-123}`,
          taskTags: ["for-other", "work"],
          taskTitle: "Title 4",
        },
      ],
    ],
    [
      "2022-11-28",
      [
        {
          taskDate: "2022-11-28",
          taskDescription: "lorem ipsum",
          taskId: `todo-456}`,
          taskTags: ["for-other", "work"],
          taskTitle: "Title 3",
        },
      ],
    ],
    [
      "2022-11-25",
      [
        {
          taskDate: "2022-11-25",
          taskDescription: "lorem ipsum ipsum",
          taskId: `todo-789}`,
          taskTags: ["work"],
          taskTitle: "Title 1",
        },
        {
          taskDate: "2022-11-25",
          taskDescription: "lorem lorem",
          taskId: `todo-012}`,
          taskTags: ["for-other"],
          taskTitle: "Title 2",
        },
      ],
    ],
  ]);

// Test #1
it("renders successfully", () => {
  render(
    <ToDoBoard
      hideTodoBoard={hideTodoBoard}
      todoList={todoList}
      setTodoList={setTodoList}
    />
  );
});

// Test #2
it("matches snapshot DOM node structure", () => {
  const { asFragment } = render(
    <ToDoBoard
      hideTodoBoard={hideTodoBoard}
      todoList={todoList}
      setTodoList={setTodoList}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
