import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  render(<Card />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});

// it("handles button clicks", function() {
//   const { getByText } = render(<Counter />);
//   const h2 = getByText("Current count: 0");

//   // click on the button
//   fireEvent.click(getByText("Add"));

//   // is the count different?
//   expect(h2).toHaveTextContent("1");
//   expect(h2).not.toHaveTextContent("0");
// });
