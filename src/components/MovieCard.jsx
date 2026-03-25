import "./css/MovieCard.css";
import "./../index.css";

import { getPath } from "../utils.js";

function MovieCard({ name, onClick }) {
  return (
    <div
      style={{ backgroundImage: "url(" + getPath(name, "poster") + ")" }}
      className="movie-card flex min-w-60 h-full relative z-1"
    >
      <button onClick={onClick} className="absolute inset-0 z-2 opacity-0 cursor-pointer"></button>
      <img
        src={getPath(name, "logo")}
        alt={"logo " + name}
        className="max-h-22 aspect-auto self-end-safe mb-1 ml-2"
      />
    </div>
  );
}

export default MovieCard;
