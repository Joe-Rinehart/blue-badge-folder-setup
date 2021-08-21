import React, { useState, useEffect } from "react";

import "./App.css";
import TenLittleMonkeys from "./components/Day03-challenge/TenLittleMonkey";
import InputField from "./components/Day03-challenge/inputFieldDemo/inputfield";
import Calculator from "./components/Day03-challenge/calculator/Calculator";

function App() {
  // This is a comment
  const welcomeName = "Joe";

  return (
    <div className="App">
      <h1>Welecome to React, {welcomeName}</h1>
      {/* <TenLittleMonkeys /> */}
      {/* <InputField /> */}
      <Calculator />
    </div>
  );
}

export default App;