import React from "react";
import App3 from "./App3";
import { screen,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("login sucess", async ()=>{
    render(<App3/>)
    const email = screen.getByPlaceholderText("Email")
    const password = screen.getByPlaceholderText("Password")
    const btn = screen.getByText("Submit")
    await userEvent.type(email,"admin@gmail.com")
    await userEvent.type(password,"1234")
    await userEvent.click(btn)
    const text = screen.getByText("Welcome")
    expect(text).toBeInTheDocument()
})

test("login failure", async ()=>{
    render(<App3/>)
    const email = screen.getByPlaceholderText("Email")
    const password = screen.getByPlaceholderText("Password")
    const btn = screen.getByText("Submit")
    await userEvent.type(email,"user@gmail.com")
    await userEvent.type(password,"1234")
    await userEvent.click(btn)
    const text = screen.getByText("Access Denied")
    expect(text).toBeInTheDocument()
})
