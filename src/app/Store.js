import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice";
import MoviesReducer from "../features/movies/MoviesSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: MoviesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
