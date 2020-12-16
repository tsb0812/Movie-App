import React from "react";
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  return (
    <div className="center">
      <div>
        <h1>Movies DB app made with React :)</h1>
        <br />
        <Home />
      </div>
    </div>
  );
};

export default App;
