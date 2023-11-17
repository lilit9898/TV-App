import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import styles from './feautured.module.css';
import convertSeconds from '../../../utils/hourConverter';

export const Feautured: React.FC = () => {
  const FeuturedMovieId = useSelector(
    (state: RootState) => state.featuredMovieReducer.movieId
  );
  const movieList = useSelector(
    (state: RootState) => state.movieReducer.TendingNow
  );
  const feutured = useSelector(
    (state: RootState) => state.movieReducer.Featured
  );

  const featuredMovie = !FeuturedMovieId
    ? feutured
    : movieList.find((movie) => +movie.Id === +FeuturedMovieId);

  return (
    <div className={styles.feauturedContainer}>
      <div className={styles.movieInfo}>
        <div className={styles.category}>{featuredMovie?.Category}</div>
        <img
          width={680}
          height={85}
          src={require(`../../../assets/${featuredMovie?.TitleImage}`)}
          alt='titlePhoto'
        />
        <div className={styles.movieDetails}>
          <div>{featuredMovie?.ReleaseYear}</div>
          <div>{featuredMovie?.MpaRating}</div>
          <div>{convertSeconds(Number(featuredMovie?.Duration))}</div>
        </div>

        <div className={styles.movieDescription}>
          {featuredMovie?.Description}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          reprehenderit laborum iste repellendus atque autem libero nisi
          accusantium perspiciatis enim assumenda officiis tempore harum
          doloremque, vitae asperiores inventore sint recusandae.
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <img
          className={styles.feuturedImg}
          src={require(`../../../assets/${featuredMovie?.CoverImage}`)}
          alt='coverphoto'
        />
      </div>
    </div>
  );
};
