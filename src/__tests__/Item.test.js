import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../components/Item";

test("the <li> does not have a className when initialized", () => {
  const { container } = render(<Item name="Milk" category="Dairy" />);
  expect(container.querySelector("li")).toBeInTheDocument();
  expect(container.querySelector("li").className).not.toContain("in-cart");
});

test("the <li> has a className of 'in-cart' when the Add to Cart button is clicked", () => {
  const { container } = render(<Item name="Milk" category="Dairy" />);
  fireEvent.click(screen.getByText(/ Cart/));
  expect(container.querySelector(".in-cart")).toBeInTheDocument();
});
