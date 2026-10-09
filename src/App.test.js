import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders the hero and main sections", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/I build fast/i);
  ["About", "Services", "Experience", "Skills", "Work", "Contact"].forEach((label) => {
    expect(screen.getAllByRole("link", { name: label }).length).toBeGreaterThan(0);
  });
});

test("toggles between light and dark themes", () => {
  render(<App />);
  const root = document.documentElement;
  const start = root.getAttribute("data-theme");
  fireEvent.click(screen.getByRole("button", { name: /switch to (dark|light) theme/i }));
  expect(root.getAttribute("data-theme")).not.toBe(start);
});
