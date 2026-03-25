import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieInfo from "./MovieInfo";

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

export default Movie;
