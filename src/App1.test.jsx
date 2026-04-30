import App1 from "./App1";
import React from 'react'
import { screen, render } from "@testing-library/react";

test("renders hello world", () => {
  render(<App1 />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});