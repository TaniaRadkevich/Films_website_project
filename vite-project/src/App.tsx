import styles from './App.module.scss';
import SearchBar from './components/SearchBar/SearchBar.tsx'
import FilmsList from './components/FilmsList/FilmsList.tsx';
import MainPage from './components/pages/MainPage.tsx';
import ListTitle from './components/ListTitle/ListTitle.tsx';

function App() {

  return (
    <>
      <div className={styles.app_container}>
        <MainPage />
        <SearchBar />
        <ListTitle title='Searched films'/>
        <FilmsList />
      </div>
      
    </>
  )
}

export default App
