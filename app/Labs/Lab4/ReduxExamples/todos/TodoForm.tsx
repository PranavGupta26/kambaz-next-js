"use client";

import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo, Todo } from "./todosReducer";

// Root state type
interface RootState {
  todosReducer: {
    todo: Todo;
  };
}

export default function TodoForm() {
  // Typed selector
  const todo = useSelector((state: RootState) => state.todosReducer.todo);
  const dispatch = useDispatch();

  return (
    <ListGroupItem>
      <FormControl
        value={todo.title}
        onChange={(e) =>
          dispatch(setTodo({ ...todo, title: e.target.value }))
        }
        placeholder="Enter todo"
        style={{ marginBottom: "5px" }}
      />
      <Button
        onClick={() => dispatch(addTodo(todo))}
        style={{ marginRight: "5px", backgroundColor: "green", color: "white" }}
      >
        Add
      </Button>
      <Button
        onClick={() => dispatch(updateTodo(todo))}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Update
      </Button>
    </ListGroupItem>
  );
}
