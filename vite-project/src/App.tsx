import styles from './App.module.scss';
import logo from './images/logo.svg'

function App() {

  return (
    <>
      <div className={styles.app_container}>
        <header className={styles.header}>
        <div className={styles.nav_logo_img}>
            <img src={logo} alt="Logo" />
        </div>
        </header>
        <div className={styles.info_block}>
          <h1 className={styles.title}>Films</h1>
          <p className={styles.description}>List of movies and TV Shows. Start search to see the results.</p>
        </div>
      </div>
    </>
  )
}

export default App
