import React from "react";
import { render, getByText, getByAltText } from "@testing-library/react";
import App from "./App";

test("renders app", () => {
  const { getByTestId, getAllByTestId } = render(<App />);
  const app = getByTestId("app");
  expect(app).toBeInTheDocument();

  const header = getByTestId("header");
  expect(header).toBeInTheDocument();

  const headerName = getByText(header, /Alessio Bianchetti/i);
  expect(headerName).toBeInTheDocument();

  const headerProjects = getByText(header, /Projects/i);
  expect(headerProjects).toBeInTheDocument();

  const profile = getByTestId("profile");
  expect(profile).toBeInTheDocument();

  const profilePicture = getByAltText(profile, "logo");
  expect(profilePicture).toBeInTheDocument();

  const socialButton = getByTestId("social-buttons");
  expect(socialButton).toBeInTheDocument();

  const socialButtons = getAllByTestId("social-button");
  expect(socialButtons.length).toBe(5);

  const footer = getByTestId("footer");
  expect(footer).toBeInTheDocument();

  const donateButton = getByTestId("donate-button");
  expect(donateButton).toBeInTheDocument();
});
