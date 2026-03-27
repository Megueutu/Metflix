import { useState } from "react";
import "./css/Movie.css";

import { getMovie, getPath, calculateStars } from "../utils.js";
import {
  HiOutlinePlay,
  HiOutlineStar,
  HiOutlineDocumentText,
  HiX,
} from "react-icons/hi";

function Movie({ name }) {
  const [activeMovie, setActiveMovie] = useState(null);

  return (
    <>
      <MovieCard name={name} onClick={() => setActiveMovie(name)} />

      {activeMovie && (
        <MovieInfo name={activeMovie} onClose={() => setActiveMovie(null)} />
      )}
    </>
  );
}

function MovieCard({ name, onClick }) {
  return (
    <div
      style={{ backgroundImage: "url(" + getPath(name, "poster") + ")" }}
      className="movie-card flex min-w-60 h-full relative z-1 overflow-hidden"
    >
      <button
        onClick={onClick}
        className="absolute inset-0 z-2 opacity-0 cursor-pointer"
      ></button>
      <img
        src={getPath(name, "logo")}
        alt={"logo " + name}
        className="max-h-22 aspect-auto self-end-safe mb-1 ml-2"
      />
    </div>
  );
}

function MovieInfo({ name, onClose }) {
  const movie = getMovie(name);

  return (
    <div className="fixed flex inset-0 z-3 overlay">
      <div className="size-100 m-auto p-5 movie-info relative">
        <button onClick={onClose} className="absolute right-6 cursor-pointer">
          <HiX />
        </button>
        <div className="flex h-2/4 justify-end items-baseline flex-col overflow-hidden">
          <img src={getPath(name, "logo")} className="max-w-32 h-fit" />
          <div className="flex gap-2 w-full min-w-0 overflow-x-auto scroll-hidden">
            <button className="button flex-row-reverse shrink-0">
              Ver trailer <HiOutlinePlay className="mr-1" />
            </button>
            <button className="button flex-row-reverse shrink-0">
              Ver resenha <HiOutlineDocumentText className="mr-1" />
            </button>
          </div>
        </div>

        <div className="flex gap-4 w-full h-10 items-center overflow-visible">
          <p>{movie.year}</p>
          <p>{movie.classification}</p>
          <p>{movie.duration}</p>
        </div>

        <div className="flex gap-1 items-center">
          <GetStars score={movie.score} />
          <div className="flex gap-2">
            <CriticBox critic={"imdb"} />
            <p>{movie.score}</p>
          </div>
        </div>

        <h1 className="text-3xl">{movie.title}</h1>
        <p>{movie.synopsis}</p>
        <div>
          <button>IMDB</button>
        </div>
      </div>
    </div>
  );
}

function GetStars({ score }) {
  const stars = calculateStars(score);
  const fullStars = Math.floor(stars);
  const half = stars % 1 !== 0;

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, i) => (
        <HiOutlineStar key={i} className="star" />
      ))}

      {half && <HiOutlineStar className="star half" />}
    </div>
  );
}

function CriticBox({ critic }) {
  return (
    <div className={"flex w-8 p-1 critic-box " + critic}>
      <img src={`critics/${critic}.svg`} />
    </div>
  );
}

export default Movie;
