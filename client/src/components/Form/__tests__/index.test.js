import React from "react";
// render function helps render the component; Jest creates simulated DOM in Node environment
// to approximate the actual DOM--no component is actually rendered
// cleanup function is used to remove components from the DOM to prevent memory leaking,
// as well as variable or data collisions between tests that could corrupt test results
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Form from "..";

afterEach(cleanup);

// Test #1, 'it' can be interchanged with 'test'
it("renders successfully", () => {
  render(<Form />);
});

// Test #2
