import { createSlice } from "@reduxjs/toolkit";

const movieInitialState = {
  recommended: null,
  original: null,
  newDisney: null,
  trending: null,
};
const movieSlice = createSlice({
  name: "movie",
  initialState: { value: movieInitialState },
  reducers: {
    setMovies: (state, action) => {
      state.value = action.payload;
      // state.recommended = action.payload.recommended;
      // state.original = action.payload.original;
      // state.newDisney = action.payload.newDisney;
      // state.trending = action.payload.trending;
    },
  },
});
export const { setMovies } = movieSlice.actions;
// export const recomemdedMovies = (state) => state.movies.recomemded;
// export const originalMovies = (state) => state.movies.original;
// export const newDisneyMovies = (state) => state.movies.newDisney;
// export const trendingMovies = (state) => state.movies.trending;

export default movieSlice.reducer;

