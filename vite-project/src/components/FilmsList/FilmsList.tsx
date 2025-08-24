import React, {useEffect, useState} from "react";
import styles from "./FilmsList.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import LoadButton from "../button/LoadButton";



const FilmsList = () => {
  const { items, loading, hasSearched } = useSelector(
    (state: RootState) => state.films
  );
  const [filmsAmount, setFilmsAmount] = useState(8);

  useEffect(() => {
    setFilmsAmount(8);
  }, [items]);

  const loadMoreFilms = () => {
    setFilmsAmount((prevNumber) => prevNumber + 8);
  }

    const visibleFilms  = items.slice(0, filmsAmount);

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
if (hasSearched && items.length === 0) {
  return (
    <div className={styles.search_result_block}>
      <h2 className={styles.search_result}>
        No films found
      </h2>
    </div>
  );
}

  return (
    <div className={styles.filmsList}>
      {visibleFilms.map((film) => (
        <div key={film.imdbID} className={styles.filmCard}>
          <img className={styles.film_poster} src={film.Poster} alt={film.Title} />
          <h3 className={styles.film_title}>{film.Title}</h3>
        </div>
      ))}
        {items.length > visibleFilms.length && (
        <LoadButton buttonName="Load More" onClick={loadMoreFilms} />
      )}
    </div>
  );
};

export default FilmsList;
