"use client";

import React from "react";
import { ListGroupItem, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();

  return (
    <ListGroupItem key={todo.id} className="d-flex justify-content-between align-items-center">
      <span>{todo.title}</span>
      <div>
        <Button
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
          style={{ marginRight: "5px", backgroundColor: "red", color: "white" }}
        >
          Delete
        </Button>
        <Button
          onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click"
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Edit
        </Button>
      </div>
    </ListGroupItem>
  );
}
