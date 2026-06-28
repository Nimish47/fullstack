import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {


  console.log('app comp rendered')

  return (
    <div className={styles.rootContainer}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.mainContainer}>
        <Outlet />
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
