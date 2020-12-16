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
        res.data.results.map((data) => {
          movieData.push(data);
        });
        console.table(movieData);
        setMovies(movieData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="card-container">
      {movies.map((movie) => {
        return (
          <div className="col md-8">
            <MovieCard
              title={movie.title}
              imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
