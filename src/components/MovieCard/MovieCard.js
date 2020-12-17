import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <Link to={`/details/${props.id}`}>
      <img className="posterCard" src={props.imgSrc} alt={props.title} />
    </Link>
  );
};

export default MovieCard;
