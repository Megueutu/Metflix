import "./css/MoviesRow.css";
import "./../index.css";

import Movie from "./Movie.jsx";
import MovieError from "../utils.js";
import {
  getMovies,
  getMoviesByFilter,
  getMoviesByMultiFiltering,
} from "../utils.js";

function MoviesRow({ title, filter, random }) {
  let movies = getMovies();
  if (typeof filter === "string") {
    movies = getMoviesByFilter(filter);
  } else if (Array.isArray(filter)) {
    movies = getMoviesByMultiFiltering(filter);
  }

  if (random === "true") {
    movies = shuffle(movies);
  }

  let rowTitle =
    title !== undefined
      ? title
      : Array.isArray(filter)
        ? filter.join(", ")
        : filter;
  if (rowTitle === undefined)
    throw new MovieError("No name possibilities. Title is never declared.");

  return (
    <div>
      <h1 className="text-2xl ml-(--gap-movie) mb-2">{rowTitle}</h1>
      <div className="flex gap-(--gap-movie) h-40 w-full overflow-auto">
        <InvisibleComp />
        {movies.map((movie, i) => (
          <Movie key={i} name={movie} />
        ))}
      </div>
    </div>
  );
}

function InvisibleComp() {
  return <div></div>; // Retorna uma div que força o gap inicial
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default MoviesRow;
