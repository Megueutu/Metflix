import "./css/SpotlightMovie.css";
import "../index.css";
import { getMovie, getPath } from "../utils.js";

import { HiPlay } from "react-icons/hi";

function SpotlightMovie({ name }) {
  const movie = getMovie(name);

  return (
    <div className="ml-(--gap-movie) mb-6 pt-60 bg-movie">
      <img className="w-40" src={getPath(name, "logo")} />
      <h1 className="text-4xl">{movie.title}</h1>
      <div className="flex gap-5 nth-[n]:opacity-60">
        <p>{movie.duration}</p>
        <p>{movie.year}</p>
        <div className="flex genres-dot">
          {movie.genre.map((genre, _) => (
            <p className="text-sm flex items-center">{genre}</p>
          ))}
        </div>
      </div>
      <p>{movie.synopsis}</p>
      <div className="flex gap-3 mt-5 h-8">
        <button className="button flex-row shrink-0">
          <HiPlay className="mr-1" />
          Assistir trailer
        </button>
        <button className="button flex-row shrink-0">
          <HiPlay className="mr-1" />
          Assistir trailer
        </button>
      </div>
    </div>
  );
}

export default SpotlightMovie;
