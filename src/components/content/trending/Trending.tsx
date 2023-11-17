import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { setFeaturedMovie } from '../../../redux/slices/feuturedMovieSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { moveMovieToStart } from '../../../redux/slices/movieSlice';
import { useEffect } from 'react';

const Trending: React.FC = () => {
  const dispatch = useDispatch();
  const TrendingMovieList = useSelector(
    (state: RootState) => state.movieReducer?.TendingNow
  );

  useEffect(() => {
    sessionStorage.setItem('sortedMovies', JSON.stringify(TrendingMovieList));
  }, [dispatch]);

  const handleFeuturedMovie = (id: string) => {
    const index = TrendingMovieList.findIndex((movie) => movie.Id === id);
    const movedMovie = TrendingMovieList[index];
    const updatedTendingNow = [
      movedMovie,
      ...TrendingMovieList.slice(0, index),
      ...TrendingMovieList.slice(index + 1),
    ];
    dispatch(setFeaturedMovie(id));
    dispatch(moveMovieToStart(id));
    sessionStorage.setItem('sortedMovies', JSON.stringify(updatedTendingNow));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings}>
      {TrendingMovieList?.map((item) => (
        <div
          key={item.Id}
          className='carousel-item'
          onClick={() => handleFeuturedMovie(item.Id)}
        >
          <img
            src={require(`../../../assets/${item?.CoverImage}`)}
            alt={item.Title}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Trending;
