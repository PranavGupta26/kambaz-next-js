"use client";

import React from "react";
import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { Todo } from "./todosReducer";

// Define the type for your Redux root state
interface RootState {
  todosReducer: {
    todos: Todo[];
    todo: Partial<Todo>;
  };
}

export default function TodoList() {
  // Get todos from Redux store with proper typing
  const todos = useSelector((state: RootState) => state.todosReducer.todos);

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>

      <ListGroup>
        {/* Form to add/update todos */}
        <TodoForm />

        {/* Render all todo items */}
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>

      <hr />
    </div>
  );
}
