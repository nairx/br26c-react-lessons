import App from "./App";
import React from 'react'
import { screen, render } from "@testing-library/react";

test("renders hello world", () => {
  render(<App />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
