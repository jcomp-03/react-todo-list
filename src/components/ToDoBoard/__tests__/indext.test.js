import React from "react";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import ToDoBoard from "..";

afterEach(cleanup);

// Test #1
it("renders successfully", () => {
  const todoList = [
    {
      taskTitle: "Title 5",
      taskDescription: "lorem ipsum",
      taskTags: ['medical-appt'],
      taskDate: '2023-01-01',
    },
    {
      taskTitle: "Title 1",
      taskDescription: "lorem ipsum",
      taskTags: ['self-care', 'home'],
      taskDate: '2022-11-28',
    },
    {
      taskTitle: "Title 1.5",
      taskDescription: "Est consequat",
      taskTags: ['fun-activity'],
      taskDate: '2022-11-28',
    },
    {
      taskTitle: "Title 3",
      taskDescription: "Est consequat laboris",
      taskTags: ['legal-appt'],
      taskDate: '2022-12-01',
    },
    {
      taskTitle: "Title 4",
      taskDescription: "Est consequat laboris officia",
      taskTags: ['fitness', 'fun-activity', 'legal-appt'],
      taskDate: '2022-12-01',
    },
    {
      taskTitle: "Title 2",
      taskDescription: "lorem",
      taskTags: ['for-other', 'work'],
      taskDate: '2022-11-29',
    }
  ];

  render(<ToDoBoard todoList={todoList} />);
});

// Test #2
