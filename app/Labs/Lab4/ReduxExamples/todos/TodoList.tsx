"use client";

import React from "react";
import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  // Get todos from Redux store
  const todos = useSelector((state: any) => state.todosReducer.todos);

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      
      <ListGroup>
        {/* Form to add/update todos */}
        <TodoForm />

        {/* Render all todo items */}
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>

      <hr />
    </div>
  );
}
