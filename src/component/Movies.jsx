import React from "react";
import movies1 from "../assest/images/viewers-disney.png";
import movies2 from "../assest/images/viewers-marvel.png";
import movies3 from "../assest/images/viewers-national.png";
import movies4 from "../assest/images/viewers-pixar.png";
import movies5 from "../assest/images/viewers-starwars.png";
import video1 from "../assest/videos/disney.mp4";
import video2 from "../assest/videos/marvel.mp4";
import video3 from "../assest/videos/national-geographic.mp4";
import video4 from "../assest/videos/pixar.mp4";
import video5 from "../assest/videos/star-wars.mp4";

const Movies = () => {
  const allMovies = [movies1, movies2, movies3, movies4, movies5];
  const allVideo = [video1, video2, video3, video4, video5];
  const movie = allMovies.map((mov, id) => {
    const video = allVideo[id];
    return (
      <div
        key={id}
        className="rounded-xl movies border-[rgba(115,115,115,0.34)] border-4 cursor-pointer hover:scale-105 hover:border-[rgba(249,249,249,0.8)] relative overflow-hidden pt-[55.6%] group transition duration-300"
      >
        <img
          src={mov}
          alt="movie"
          className="w-full h-full absolute top-0 object-cover block  transition duration-300 z-10"
        />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          className="w-full h-full absolute top-0  z-0 transition duration-300 opacity-0 group-hover:opacity-100"
          muted={true}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  });

  return <div className="mt-10 grid grid-cols-5x gap-5 ">{movie}</div>;
};

export default Movies;
