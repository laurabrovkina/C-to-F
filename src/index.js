import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Calculator from "./Calculator";

const App = () => (
  <div>
    <Calculator />
  </div>
);

render(<App />, document.getElementById("root"));
