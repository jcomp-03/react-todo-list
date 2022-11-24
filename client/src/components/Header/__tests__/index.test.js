import React from "react";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Header from "..";

afterEach(cleanup);

// Test #1
it("renders successfully", () => {
  render(<Header />);
});

// Test #2
it('matches snapshot DOM node structure', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});