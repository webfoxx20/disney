import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieListSkeleton from "../skeleton/MovieListSkeleton";
import MoviesView from "./MoviesView";
const NewDisney = () => {
  const [movies, setMovies] = useState(null);
  const newDisneyMovies = useSelector((state) => state.movie.value.newDisney);
  useEffect(() => {
    setMovies(newDisneyMovies);
  }, [newDisneyMovies]);
  return (
    <div className="mt-20">
      <h4 className="text-2xl">New disney +</h4>
      {movies ? <MoviesView movie={newDisneyMovies} /> : <MovieListSkeleton />}
    </div>
  );
};

export default NewDisney;
