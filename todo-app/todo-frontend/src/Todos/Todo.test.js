import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Todo from "./Todo"

let onClickMock = jest.fn()

test("renders a todo item", () => {
  const todo = {
    text: "This is a test todo item",
    done: false,
  }

  const { container } = render(
    <Todo
      todo={todo}
      onClickComplete={onClickMock}
      onClickDelete={onClickMock}
    />
  )

  //screen.debug(container.querySelector("div"))
  const element = container.querySelector("div")

  expect(element).toHaveTextContent("This is a test todo item")
})
