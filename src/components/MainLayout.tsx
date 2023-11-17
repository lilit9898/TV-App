import { ReactNode } from 'react';
import './mainLayout.module.css';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return <div style={{ width: '100%', height: '100vh' }}>{children}</div>;
};

export default MainLayout;
