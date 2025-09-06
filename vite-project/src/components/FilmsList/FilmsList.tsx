import React from "react";
import styles from "./FilmsList.module.scss";
import { useSelector,useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import LoadButton from "../LoadButton/LoadButton";
import {  fetchFilms } from "../../store/thunks/filmThunk";


const FilmsList = () => {
  const { items, loading, hasSearched, totalResults, page, query } = useSelector(
    (state: RootState) => state.films
  );
   const dispatch = useDispatch<AppDispatch>();

  const loadMoreFilms = () => {
     dispatch(fetchFilms({ query, page: page + 1 }));
  }


  if (loading && page === 0) { return <p className={styles.loading}>Loading...</p>; 
}
  if (!hasSearched || query.trim() === ""){
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
      {items.map((film) => (
        <div key={film.imdbID} className={styles.filmCard}>
          <img className={styles.film_poster} src={film.Poster} alt={film.Title} />
        
          <h3 className={styles.film_title}>{film.Title}</h3>
        </div>
      ))}
        {items.length < totalResults && (
        <LoadButton buttonName="Load More" onClick={loadMoreFilms} />
      )}
    </div>
  );
};

export default FilmsList;
