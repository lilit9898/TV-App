import movieSlice from './slices/movieSlice';
import featuredMovieSlice from './slices/feuturedMovieSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  movieReducer: movieSlice.reducer,
  featuredMovieReducer: featuredMovieSlice.reducer,
});

export default rootReducer;
