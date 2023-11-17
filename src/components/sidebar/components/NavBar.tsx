import styles from '../sidebar.module.css';
import SearchIcon from '../../../assets/icons/ICON - Search.png';
import HomeIcon from '../../../assets/icons/Group 46.png';
import TvShowsIcon from '../../../assets/icons/Group 56.png';
import MoviesIcon from '../../../assets/icons/Group 54.png';
import GenresIcon from '../../../assets/icons/Group 53.png';
import WatchLaterIcon from '../../../assets/icons/Group 47.png';

interface INavProps {
  opened: boolean;
}
const NavBar: React.FC<INavProps> = ({ opened }) => {
  return (
    <div className={styles.navBarContainer}>
      {opened ? (
        <div className={styles.userCont}>
          <div className={styles.user}></div>
          <p>Daniel</p>
        </div>
      ) : null}

      <ul className={styles.navBar}>
        <li className={styles.navItem}>
          <img
            src={SearchIcon}
            alt='searchIcon'
            style={{ width: 30, height: 26 }}
          />
          <p>Search</p>
        </li>
        <li className={styles.navItem}>
          <img
            src={HomeIcon}
            alt='HomeIcon'
            style={{ width: 30, height: 26 }}
          />
          <p>Home</p>
        </li>
        <li className={styles.navItem}>
          <img
            src={TvShowsIcon}
            alt='TvShowsIcon'
            style={{ width: 30, height: 26 }}
          />
          <p>TV Shows</p>
        </li>
        <li className={styles.navItem}>
          <img
            src={MoviesIcon}
            alt='MoviesIcon'
            style={{ width: 30, height: 26 }}
          />
          <p>Movies</p>
        </li>
        <li className={styles.navItem}>
          <img
            src={GenresIcon}
            alt='GenresIcon'
            style={{ width: 30, height: 26 }}
          />
          <p>Genres</p>
        </li>
        <li className={styles.navItem}>
          <img
            src={WatchLaterIcon}
            alt='WatchLaterIcon'
            style={{ width: 30, height: 26 }}
          />
          <p>Watch Later</p>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
