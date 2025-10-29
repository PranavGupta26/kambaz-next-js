import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);

  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
        style={{ backgroundColor: "green", color: "white", padding: "5px 10px", marginRight: "5px" }}
      >
        Up
      </button>

      <button
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click"
        style={{ backgroundColor: "red", color: "white", padding: "5px 10px" }}
      >
        Down
      </button>

      <hr />
    </div>
  );
}
