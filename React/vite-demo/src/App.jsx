import { Outlet } from 'react-router-dom';
import styles from './App.module.css'
import { Header } from './routes/header/Header';

function App() {
  return (
    <div className={styles.home}>
      <div className='header'><Header /></div>
      <div className='content'><Outlet /></div>
    </div >
  );
}

export default App;
