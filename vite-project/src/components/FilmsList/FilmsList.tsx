import React, { useState } from "react";
import styles from "./FilmsList.module.scss";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import LoadButton from "../LoadButton/LoadButton";
import { fetchFilms } from "../../store/thunks/filmThunk";
import ListTitle from "../ListTitle/ListTitle";
import TabFilter from "../LoadButton/TabFilter";
import ratingIcon from "../../images/ratingIcon.svg";
import { Link } from "react-router-dom";

const FilmsList = () => {
  const [activeType, setActiveType] = useState("All");
  const { items, loading, hasSearched, totalResults, page, query } =
    useSelector((state: RootState) => state.films);
  const dispatch = useDispatch<AppDispatch>();

  const handleTypeChange = (type: string) => {
    setActiveType(type);
    dispatch(fetchFilms({ query, page: 1, type }));
  };

  const loadMoreFilms = () => {
    dispatch(fetchFilms({ query, page: page + 1, type: activeType }));
  };

  if (loading && page === 0) {
    return <p className={styles.loading}>Loading...</p>;
  }
  if (!hasSearched || query.trim() === "") {
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
        <h2 className={styles.search_result}>No films found</h2>
      </div>
    );
  }

  return (
    <div>
      <TabFilter activeType={activeType} onChange={handleTypeChange} />
      <ListTitle title="Searched films" count={totalResults} />
      <div className={styles.filmsList}>
        {items.map((film) => (
          <Link
            to={`/film/${film.imdbID}`}
            className={styles.filmCard}
            key={film.imdbID}
          >
            <div className={styles.ratingBadge}>
              {" "}
              <span>
                <img src={ratingIcon} alt="ratingIcon" />
              </span>
              {film.imdbRating}
            </div>
            <img
              className={styles.film_poster}
              src={film.Poster}
              alt={film.Title}
            />
            <h3 className={styles.film_title}>{film.Title}</h3>
          </Link>
        ))}

        {items.length < totalResults && (
          <LoadButton buttonName="Load More" onClick={loadMoreFilms} />
        )}
      </div>
    </div>
  );
};

export default FilmsList;
