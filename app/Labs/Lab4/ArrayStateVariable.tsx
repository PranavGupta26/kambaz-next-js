"use client";

import { useState } from "react";
import { useSelector } from "react-redux";

// Define a type for your Redux todos
interface Todo {
  id: string | number;
  title: string;
}

// Define a type for your Redux state slice
interface RootState {
  todosReducer: {
    todos: Todo[];
  };
}

export default function ArrayStateVariable() {
  const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  // ✅ Typed access to Redux todos
  const todos = useSelector((state: RootState) => state.todosReducer.todos);

  return (
    <div className="max-w-xs mx-auto p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-3 text-center">Array State Variable</h2>

      <button
        onClick={addElement}
        className="bg-green-600 text-white px-4 py-2 rounded-md mb-4 hover:bg-green-700 w-full"
      >
        Add Element
      </button>

      <ul className="space-y-2 mb-4">
        {array.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border rounded-md"
          >
            <span className="text-lg font-medium">{item}</span>
            <button
              onClick={() => deleteElement(index)}
              className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3 className="font-semibold mb-2">Todos from Redux:</h3>
      <ul className="space-y-2">
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border rounded-md"
          >
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
