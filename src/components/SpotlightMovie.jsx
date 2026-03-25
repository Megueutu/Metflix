import "./css/SpotlightMovie.css";
import "./../index.css";
import { getMovie } from "../utils.js";
import { getPath } from "../utils.js";

function SpotlightMovie({ name }) {
  const movie = getMovie(name);

  return (
    <div className="ml-(--gap-movie)">
        <img className="w-40" src={getPath(name, "logo")}/>
        <h1>{movie.title}</h1>
        <div className="flex">
          <p>{movie.duration}</p>
          <p>{movie.year}</p>
          {movie.genre.map((genre, _) => (
            <p>{genre}</p>
          ))}
        </div>
        <p>{movie.synopsis}</p>
    </div>
  );
}

export default SpotlightMovie;
