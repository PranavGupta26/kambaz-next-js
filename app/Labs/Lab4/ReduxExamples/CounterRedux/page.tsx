import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";
import store, { RootState } from "../../store"; // <- import RootState

export default function CounterRedux() {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch();

  return (
    <div id="wd-counter-redux">
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button
        onClick={() => dispatch(increment())}
        style={{ backgroundColor: "green", color: "white", marginRight: "5px" }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Decrement
      </button>
      <hr />
    </div>
  );
}
