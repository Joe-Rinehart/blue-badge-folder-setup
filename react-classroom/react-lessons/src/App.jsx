import React, { useState, useEffect } from "react";

import "./App.css";
import ChuckFetch from "./components/Day04-challenge/ChuckFetch/ChuckFetch";
import MortyParent from "./components/Day04-challenge/MortyFetch/MortyParent";
import UseEffectpractice from "./components/Day04-challenge/useEffectPractice/UseEffectPractice";

function App() {
  // This is a comment
  const welcomeName = "Joe";

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      {/* <UseEffectpractice />
      <ChuckFetch /> */}
      <MortyParent />
    </div>
  );
}

export default App;

