import styles from './content.module.css';
import { Feautured } from './feautered/Feautured';
import Trending from './trending/Trending';

export const Content: React.FC = () => {
  return (
    <div className={styles.contentContainer}>
      <Feautured />
      <Trending />
    </div>
  );
};
