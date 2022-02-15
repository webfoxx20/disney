import React, { useEffect, useState } from "react";
// import img1 from "../assest/images/hero.jpg";
import MoviesView from "./MoviesView";
import { useSelector } from "react-redux";
import MovieListSkeleton from "../skeleton/MovieListSkeleton";

const Recommends = () => {
  const [movies, setMovies] = useState(null);
  const recommendMovies = useSelector((state) => state.movie.value.recommended);
  useEffect(() => {
    setMovies(recommendMovies);
  }, [recommendMovies]);
  return (
    <div className="mt-20">
      <h4 className="text-2xl">Recommended for you</h4>
      {movies ? <MoviesView movie={recommendMovies} /> : <MovieListSkeleton />}
    </div>
  );
};

export default Recommends;
