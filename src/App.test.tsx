import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const title = getByText(/Alessio Bianchetti/i);
  expect(title).toBeInTheDocument();
  const subtitle = getByText(/Computer Scientist/i);
  expect(subtitle).toBeInTheDocument();
});
