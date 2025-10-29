"use client";

import { useSelector } from "react-redux";

// Type for the helloReducer slice
interface HelloState {
  message: string;
}

// Root state type
interface RootState {
  helloReducer: HelloState;
}

export default function HelloRedux() {
  // Typed useSelector
  const { message } = useSelector((state: RootState) => state.helloReducer);

  return (
    <div id="wd-hello-redux">
      <h3>Hello Redux</h3>
      <h4>{message}</h4>
      <hr />
    </div>
  );
}
