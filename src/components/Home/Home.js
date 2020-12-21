import { useState, useEffect } from "react";
import axios from "../../axios";
import "./Home.css";

import requests from "../../requests";
import MovieCard from "../MovieCard/MovieCard";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(requests.popular)
      .then((res) => {
        const movieData = [];
        res.data.results.map((data) => movieData.push(data));
        console.table(movieData);
        setMovies(movieData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="mainHeading">POPULAR MOVIES</h1>
      <div className="gridContainer">
        {movies.map((movie) => {
          return (
            <MovieCard
              title={movie.title}
              imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              id={movie.id}
              key={movie.key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
