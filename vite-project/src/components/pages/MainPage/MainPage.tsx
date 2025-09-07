import React from "react";
import styles from "./MainPage.module.scss";
import Header from "../../Header/Header.tsx";
import SearchBar from "../../SearchBar/SearchBar.tsx";
import FilmsList from "../MainPage/../../FilmsList/FilmsList.tsx";

const MainPage = () => {
  return (
    <div className={styles.main_page}>
        <Header />
      <div className={styles.info_block}>
        <h1 className={styles.title}>Films</h1>
        <p className={styles.description}>
          List of movies and TV Shows. Start search to see the results.
        </p>
      </div>
      <SearchBar />
      <FilmsList />
    </div>
  );
};

export default MainPage;
