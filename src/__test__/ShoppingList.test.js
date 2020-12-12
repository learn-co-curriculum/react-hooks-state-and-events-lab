import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";
import itemData from "../data/items";

test("displays all items when initially rendered", () => {
  const { container } = render(<ShoppingList items={itemData} />);
  expect(container.querySelector(".Items").children).toHaveLength(
    itemData.length
  );
});

test("displays only items that match the selected category", () => {
  const { container } = render(<ShoppingList items={itemData} />);

  fireEvent.change(screen.getByRole("combobox"), { value: "Dairy" });

  expect(container.querySelector(".Items").children).toHaveLength(2);

  fireEvent.change(screen.getByRole("combobox"), { value: "Dessert" });

  expect(container.querySelector(".Items").children).toHaveLength(1);
});
