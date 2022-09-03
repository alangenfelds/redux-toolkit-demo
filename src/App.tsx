import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from "./features/counter/Counter";

function App() {
  return <div className="App">
            <h1>Redux toolkit Demo App</h1>
            <Counter />
          </div>;
}

export default App;
