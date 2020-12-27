import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

test("displays in 'light' mode when initialized", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".light")).toBeInTheDocument();
});

test("changes to 'dark' mode when the button is clicked", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".light")).toBeInTheDocument();

  fireEvent.click(screen.getByText(/ Mode/));

  expect(container.querySelector(".dark")).toBeInTheDocument();
});

test("changes back to 'light' mode when the button is clicked twice", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".light")).toBeInTheDocument();

  fireEvent.click(screen.getByText(/ Mode/));

  expect(container.querySelector(".dark")).toBeInTheDocument();

  fireEvent.click(screen.getByText(/ Mode/));

  expect(container.querySelector(".light")).toBeInTheDocument();
});
