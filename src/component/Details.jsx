import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

import playButtonWhite from "../assest/images/play-icon-white.png";
import playButtonBlack from "../assest/images/play-icon-black.png";
import { collection, getDocs } from "firebase/firestore";

const Details = () => {
  const id = useParams();

  const [detailsData, setDetailsData] = useState();
  const [trailer, setTrailer] = useState(false);

  useEffect(() => {
    const colRef = collection(db, "Movies");

    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.id === id.id) {
            setDetailsData(doc.data());
            console.log(doc.data());
          }
        });
      })
      .catch((error) => {
        console.log(`Error message ${error}`);
      });
  }, [id]);

  const onPlayClick = () => {
    setTrailer(true);
  };
  const details = () => {
    return (
      <div className="relative min-h-screen w-full overflow-hidden">
        <div className=" container  pt-20 h-full mx-auto top-0 px-4 md:px-10 ">
          <img
            src={detailsData.titleImg}
            alt={detailsData.title}
            className="w-96"
          />
          <div className="flex  mt-20">
            <button className="bg-white  px-4 rounded md:py-1.5 hover:bg-white hover:bg-opacity-80 flex items-center">
              <img src={playButtonBlack} alt="play button" />
              <span className="text-xl tracking-widest uppercase">play</span>
            </button>
            <button
              onClick={onPlayClick}
              className="bg-black hover:bg-[#0f0f0f] bg-opacity-30 ml-3 px-4 rounded md:py-1.5 flex items-center border border-white"
            >
              <img src={playButtonWhite} alt="play button" />
              <span className="text-xl tracking-widest text-white uppercase">
                Trailer
              </span>
            </button>
            <div className="ml-3 w-10 h-10 self-center bg-black bg-opacity-30  border-2 border-white rounded-[50%] flex flex-col items-center justify-center ">
              <div className="w-4 h-0.5 bg-white "></div>
              <div className="w-4 h-0.5 bg-white -rotate-90 transform -translate-y-0.5"></div>
              <div></div>
            </div>
          </div>
          <div className="w-full">
            {trailer ? (
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/i5qOzqD9Rms"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              ""
            )}
          </div>
          <div className="w-[90%] md:w-[70%]">
            <h3 className="text-[rgb(249,249,249)] mt-10 md:text-lg  ">
              {detailsData.subTitle}
            </h3>
            <p className="mt-5 text-[rgb(249,249,249)]  md:text-lg">
              {detailsData.description}
            </p>
          </div>
        </div>
        <img
          src={detailsData ? detailsData.backgroundImg : "ctaLogoTwo"}
          alt={detailsData.title}
          className="w-full h-full absolute top-0 left-0 -z-10 overflow-hidden object-cover object-center "
        />
      </div>
    );
  };
  const loader = () => {
    return (
      <div className=" w-full h-full  flex justify-center items-center text-center ">
        <div>Loading..</div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {detailsData ? details() : loader()}
    </div>
  );
};

export default Details;
