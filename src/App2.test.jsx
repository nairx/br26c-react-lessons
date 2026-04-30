import App2 from "./App2";
import React from "react";
import { screen,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("button click", async ()=>{
    render(<App2/>)
    const btn = screen.getByText("Click")
    await userEvent.click(btn)
    const text = screen.getByText("Hello World")
    expect(text).toBeInTheDocument()
})