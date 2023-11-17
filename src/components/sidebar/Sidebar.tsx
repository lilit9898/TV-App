import React, { useState } from 'react';
import styles from './sidebar.module.css';
import NavBar from './components/NavBar';
import Info from './components/Info';

const Sidebar: React.FC = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setOpened(true)}
      onMouseLeave={() => setOpened(false)}
    >
      <NavBar opened={opened} />
      <Info opened={opened} />
    </div>
  );
};

export default Sidebar;
