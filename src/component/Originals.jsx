import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieListSkeleton from "../skeleton/MovieListSkeleton";
import MoviesView from "./MoviesView";
const Orginals = () => {
  const [movies, setMovies] = useState(null);
  const originalMovies = useSelector((state) => state.movie.value.original);

  useEffect(() => {
    if (originalMovies) {
      console.log(originalMovies.length);
      setMovies(originalMovies);
    }
  }, [originalMovies]);
  return (
    <div className="mt-20">
      <h4 className="text-2xl">Originals</h4>
      {movies ? <MoviesView movie={originalMovies} /> : <MovieListSkeleton />}
    </div>
  );
};

export default Orginals;

// useEffect(() => {
//   //get reference to the database
//   const colRef = collection(db, "Movies");

//   // get the docs in datat base
//   getDocs(colRef).then((snapshot) => {
//     let arr = [];
//     snapshot.docs.forEach((doc) => {
//       arr.push({ ...doc.data() });
//     });
//     console.log(arr);
//     arr.forEach((array) => {
//       console.log(array.type);
//       switch (array.type) {
//         case "recommend":
//           recommended.push(array);
//           break;
//         case "trending":
//           trending.push(array);
//           break;
//         case "original":
//           original.push(array);
//           break;
//         case "new":
//           newDisney.push(array);
//           break;
//       }
//     });
//   });
//   dispatch(
//     setMovies({
//       recommended,
//       original,
//       newDisney,
//       trending,
//     })
//   );
// }, [userName]);
