import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MoviesView from "./MoviesView";
import MovieListSkeleton from "../skeleton/MovieListSkeleton";
const Trending = () => {
  const [movies, setMovies] = useState(null);
  const trendingMovies = useSelector((state) => state.movie.value.trending);
  useEffect(() => {
    setMovies(trendingMovies);
  }, [trendingMovies]);
  return (
    <div className="mt-20">
      <h4 className="text-2xl">Trending</h4>
      {movies ? <MoviesView movie={trendingMovies} /> : <MovieListSkeleton />}
    </div>
  );
};

export default Trending;
