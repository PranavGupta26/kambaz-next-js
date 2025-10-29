"use client";

import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const todo = useSelector((state: any) => state.todosReducer.todo);
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
