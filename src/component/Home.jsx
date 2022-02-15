import Movies from "./Movies";
import NewDisney from "./NewDisney";
import Orginals from "./Originals";
// import MoviesView from "./MoviesView";
import Recommends from "./Recommends";
import SliderImg from "./SliderImg";
import Trending from "./Trending";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
// import {
//   recomemdedMovies,
//   originalMovies,
//   trendingMovies,
//   newDisneyMovies,
// } from "../features/movies/MoviesSlice";
import { db } from "../firebase";
import { useEffect, useRef } from "react";
import { setMovies } from "../features/movies/MoviesSlice";

const Home = () => {
  const dispatch = useDispatch();
  // const recommendMovies = useSelector((state) => state.movie.value.recommended);

  let recommendedMov = [];
  console.log(recommendedMov.current);
  let newDisneyMov = [];
  let originalMov = [];
  let trendingMov = [];
  const userName = useSelector((state) => state.user.value.name);

  useEffect(() => {
    //get reference to the database
    const colRef = collection(db, "Movies");

    // get the docs in data base
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          switch (doc.data().type) {
            case "recommend":
              recommendedMov = [
                ...recommendedMov,
                { ...doc.data(), id: doc.id },
              ];
              break;
            case "trending":
              trendingMov = [...trendingMov, { ...doc.data(), id: doc.id }];
              break;
            case "original":
              originalMov = [...originalMov, { ...doc.data(), id: doc.id }];
              break;
            case "new":
              newDisneyMov = [...newDisneyMov, { ...doc.data(), id: doc.id }];
              break;
            default:
          }
        });

        dispatch(
          setMovies({
            recommended: recommendedMov,
            original: originalMov,
            newDisney: newDisneyMov,
            trending: trendingMov,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName]);

  return (
    <main className="container mx-auto   px-10  main-content w-full text-white bg-body-background  bg-cover bg-no-repeat bg-center overflow-hidden">
      <SliderImg />
      <Movies />
      <Recommends />
      {/* <MoviesView /> */}
      <NewDisney />
      <Orginals />
      <Trending />
    </main>
  );
};

export default Home;
