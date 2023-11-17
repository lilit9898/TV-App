import './App.css';
import MainLayout from './components/MainLayout';
import { Content } from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <MainLayout>
      <Sidebar />
      <Content />
    </MainLayout>
  );
}

export default App;
