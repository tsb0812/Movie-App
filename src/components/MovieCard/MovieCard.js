import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="card">
      <img className="card-img-top fixed" src={props.imgSrc} />
    </div>
  );
};

export default MovieCard;
