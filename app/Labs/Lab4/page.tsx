"use client";

import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import ReduxExamples from "./ReduxExamples/page";
import store from "./store";
import { Provider } from "react-redux";
import HelloRedux from "./ReduxExamples/HelloRedux/page";
import CounterRedux from "./ReduxExamples/CounterRedux/page";
import AddRedux from "./ReduxExamples/AddRedux/page";
import TodoList from "./ReduxExamples/todos/TodoList";

export default function Lab4() {
  console.log("Lab 4 Loaded!");

  // Define a real function to pass as a prop
  function sayHello() {
    alert("Hello from Lab 4!");
  }

  return (
       <Provider store={store}>

    <div id="wd-lab4">
      <h1>Lab 4</h1>
      <h2>Hello World!</h2>

      {/* Include ClickEvent component */}
      <ClickEvent />

      {/* Include PassingDataOnEvent component */}
      <PassingDataOnEvent />

      {/* Include PassingFunctions component and pass a real function */}
      <PassingFunctions theFunction={sayHello} />
      <EventObject/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ParentStateComponent/>
           <ReduxExamples/>
           <HelloRedux/>
           <CounterRedux/>
           <AddRedux />
           <TodoList/>
    </div>
     </Provider>
  );
}
