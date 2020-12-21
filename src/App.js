import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieData from "./components/MovieData/MovieData";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <div>
        <Router>
          <SearchBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search/" component={SearchResults} />
            <Route exact path="/details/:id" component={MovieData} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
