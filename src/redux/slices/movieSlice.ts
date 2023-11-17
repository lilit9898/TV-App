import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import movieList from '../../mockDB/data.json';
import { MovieList } from '../../types';

const lastWatched = sessionStorage.getItem('sortedMovies');
const initialValue = JSON.parse(lastWatched as string);

const initialState: MovieList = {
  Featured: movieList.Featured,
  clickedItems: [],
  TendingNow: initialValue !== null ? initialValue : movieList.TendingNow,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.Featured = action.payload;
    },
    moveMovieToStart: (state, action: PayloadAction<string>) => {
      sessionStorage.setItem('sortedMovies', JSON.stringify(state.TendingNow));
    },
  },
});
export const { setData, moveMovieToStart } = movieSlice.actions;
export default movieSlice;
