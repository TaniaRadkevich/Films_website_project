import styles from "./App.module.scss";
import MainPage from "./components/pages/MainPage/MainPage.tsx";
import FilmDetails from "./components/pages/FilmDetails/FilmDetails.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
       <Router>
      <div className={styles.app_container}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/film/:imdbID" element={<FilmDetails />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
