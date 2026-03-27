import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import MoviesRow from "./components/MoviesRow.jsx";
import SpotlightMovie from "./components/SpotlightMovie.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SpotlightMovie name="age-of-ultron" />
    <div>
      <MoviesRow filter="Drama" />
      <MoviesRow filter="Drama" />
      <MoviesRow filter="Drama" />
      <MoviesRow filter="Drama" />
      <MoviesRow filter="Drama" />
      <MoviesRow filter="Drama" />
      <MoviesRow filter="Drama" />
      <MoviesRow filter="Drama" />
      <MoviesRow filter="Drama" />
      <MoviesRow filter="Drama" />
    </div>
  </StrictMode>,
);
