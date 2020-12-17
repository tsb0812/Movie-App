import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieData from "./components/MovieData/MovieData";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

const App = () => {
  return (
    <div>
      <SearchBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={MovieData} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
