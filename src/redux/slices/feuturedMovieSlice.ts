import { createSlice } from '@reduxjs/toolkit';

const featuredMovieSlice = createSlice({
  name: 'featuredMovie',
  initialState: {
    movieId: null,
  },
  reducers: {
    setFeaturedMovie: (state, action) => {
      state.movieId = action.payload;
    },
  },
});

export const { setFeaturedMovie } = featuredMovieSlice.actions;
export default featuredMovieSlice;