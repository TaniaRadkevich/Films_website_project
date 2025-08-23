import React from "react";
import styles from "./FilmsList.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const FilmsList = () => {
  const { items, loading, hasSearched } = useSelector(
    (state: RootState) => state.films
  );

  if (loading) { return <p className={styles.loading}>Loading...</p>; 
}
  if (!hasSearched){
    return (
      <div className={styles.search_result_block}>
        <h2 className={styles.search_result}>
          No results
          <span className={styles.search_ask}>
            Try to search something else...
          </span>
        </h2>
      </div>
    );
}

  return (
    <div className={styles.filmsList}>
      {items.map((film) => (
        <div key={film.imdbID} className={styles.filmCard}>
          <img className={styles.film_poster} src={film.Poster} alt={film.Title} />
          <h3 className={styles.film_title}>{film.Title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FilmsList;
