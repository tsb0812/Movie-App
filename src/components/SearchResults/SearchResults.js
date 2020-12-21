import { render } from "@testing-library/react";
import { useState, useEffect } from "react";
import axios from "../../axios";
import API_KEY from "../../key";
import MovieCard from "../MovieCard/MovieCard";

const SearchResults = ({ location }) => {
  const [results, setResults] = useState([]);
  const query = location.search.substring(3);

  useEffect(() => {
    axios
      .get(`/search/movie?api_key=${API_KEY}&query=${query}`)
      .then((res) => {
        console.log(res.data.results);
        setResults(res.data.results);
        console.log(results);
      })
      .catch((err) => console.log(err));
  }, [location]);

  if (results.length === 0) {
    return (
      <div className="container">
        <h1 className="mainHeading">SORRY! NO RESULTS FOUND :(</h1>
        <h2 style={{ color: "white", fontWeight: "bold", fontSize: "40px" }}>
          Try searching for other movies!
        </h2>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="mainHeading">SEARCH RESULTS</h1>
      <div className="gridContainer">
        {results.map((movie) => {
          if (movie.poster_path) {
            return (
              <MovieCard
                title={movie.title}
                imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                id={movie.id}
                key={movie.key}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default SearchResults;
