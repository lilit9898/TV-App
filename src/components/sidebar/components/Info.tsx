import styles from '../sidebar.module.css';

interface IUserProps {
  opened: boolean;
}
const User: React.FC<IUserProps> = ({ opened }) => {
  return (
    <div>
      {opened ? (
        <ul className={styles.footerContainer}>
          <li>LANGUAGE</li>
          <li>GET HELP</li>
          <li>EXIT</li>
        </ul>
      ) : null}
    </div>
  );
};

export default User;
