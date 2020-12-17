import { useState, useEffect } from "react";
import axios from "../../axios";
import API_KEY from "../../key";
import "./MovieData.css";

const MovieData = ({ match }) => {
  const [movie, setMovie] = useState({});
  const id = match.params.id;
  useEffect(() => {
    axios
      .get(`/movie/${id}?api_key=${API_KEY}`)
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
        console.log("movie", movie);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container movieData">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="image"
      />
      <div className="movieDetails">
        <h1 className="title">{movie.title}</h1>
        <h2 className="tagline">{movie.tagline}</h2>
        <p>{movie.overview}</p>
        <p>
          <strong>Vote Average : </strong>
          {movie.vote_average}
        </p>
        <p>
          <strong>Vote Count : </strong>
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
};

export default MovieData;
