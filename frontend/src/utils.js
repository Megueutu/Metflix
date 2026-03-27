import { parse } from "postcss";
import json from "./info/movies.json" with { type: "json" };

export function getMovie(name) {
  return validateMovie(name);
}

export function getPath(name, pathType) {
  validateMovie(name);

  let extension = ".jpg";
  if (pathType === "logo") extension = ".png";

  return `/movies/${pathType}/${name}${extension}`;
}

function validateMovie(name) {
  if (name === undefined) throw new MovieError("Name not specified");
  else if (typeof name !== "string")
    throw new MovieError(
      "Unexpected type of parameter. Used type: " + typeof name,
    );

  const movie = json[name.toLowerCase().trim()];
  if (movie === undefined) throw new MovieError("Movie name not find: " + name);

  return movie;
}

export function getMovies() {
  const moviesArray = [];

  for (let key in json) {
    moviesArray.push(key);
  }

  return moviesArray;
}

export function getMoviesByFilter(filter) {
  if (typeof filter !== "string")
    throw new MovieError(
      "Unexpected type of parameter. Used type: " + typeof name,
    );

  const moviesArray = [];

  for (let key in json) {
    if (filter === "all" || filter === "todos") moviesArray.push(key);
    else if (json[key].genre.includes(filter)) {
      moviesArray.push(key);
    }
  }

  if (moviesArray.length === 0)
    throw new MovieError("Any movie founded. Used filter: " + filter);

  return moviesArray;
}

export function getMoviesByMultiFiltering(filters) {
  if (!Array.isArray(filters))
    throw new MovieError(
      "Unexpected type of parameter. Used type: " + typeof filters,
    );

  const moviesArray = [];

  for (let filter of filters) {
    moviesArray.push(getMoviesByFilter(filter));
  }

  if (moviesArray.flat().length === 0)
    throw new MovieError("Any movie founded. Used filter: " + filter);

  return [...new Set(moviesArray.flat())];
}

export function calculateStars(rate) {
  let qnty = ((5 * rate) / 10).toFixed(1);
  const lastNumber = qnty.charAt(qnty.length - 1);

  let stars = 0;

  if (lastNumber === "0") stars = parseInt(qnty);
  else if ([..."123"].includes(lastNumber))
    stars = Math.floor(parseFloat(qnty));
  else if ([..."789"].includes(lastNumber)) stars = Math.ceil(parseFloat(qnty));
  else stars = parseFloat(Math.floor(parseInt(qnty)).toFixed(0) + ".5");

  if (stars <= 0.5) stars = 0.5;

  return stars;
}

export default class MovieError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "MovieError";
  }
}
