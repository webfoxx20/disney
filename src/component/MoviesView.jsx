import React from "react";
import { Link } from "react-router-dom";

const MoviesView = ({ movie }) => {
  return (
    <div className="block mt-5 md:mt-0  md:grid grid-cols-4x gap-5 w-full">
      {movie
        ? movie.map((movie, key) => (
            <div
              key={key}
              className="w-full mt-5 rounded-xl movies border-[rgba(115,115,115,0.34)]  border-4 cursor-pointer hover:scale-105 hover:border-[rgba(249,249,249,0.8)]  overflow-hidden  group transition duration-300"
            >
              <Link to={`/details/${movie.id}`}>
                <img
                  src={movie.cardImg}
                  alt={movie.title}
                  className="w-full h-full  block  transition duration-300 "
                />
              </Link>
            </div>
          ))
        : console.log("no movies")}
    </div>
  );
};

export default MoviesView;
