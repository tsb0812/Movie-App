import { useState, useEffect } from "react";
import requests from "../requests";
import axios from "../axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(requests.popular)
      .then((res) => {
        const movieData = [];
        res.data.results.map((data) => {
          movieData.push(data);
        });
        setMovies(movieData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      {movies.map((movie) => {
        return <h1 key={movie.id}>{movie.title}</h1>;
      })}
    </div>
  );
};

export default Movies;
