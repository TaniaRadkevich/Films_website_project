import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/store";
import { fetchFilmDetails } from "../../../store/thunks/filmDetailsThunk";
import { clearFilmDetails } from "../../../store/filmDetailsSlice";
import styles from "./FilmDetails.module.scss";
import ratingIcon from "../../../images/ratingIcon.svg";

const FilmDetails: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: film,
    loading,
    error,
  } = useSelector((state: RootState) => state.filmDetails);

  useEffect(() => {
    if (imdbID) {
      dispatch(fetchFilmDetails(imdbID));
    }
    return () => {
      dispatch(clearFilmDetails());
    };
  }, [dispatch, imdbID]);

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }
  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }
  if (!film) {
    return <p className={styles.no_data}>No film details found.</p>;
  }
  return (
    <div className={styles.detailsPage}>
      <Link to="/" className={styles.backLink}>
        ← Back to search
      </Link>
      <div className={styles.film_title_wrapper}>
        <h2 className={styles.film_title}>{film.Title}</h2>
      </div>
      <div className={styles.details_wrapper}>
        <img
          className={styles.film_poster}
          src={film.Poster}
          alt={film.Title}
        />
        <div className={styles.film_description}>
          <p className={styles.film_plot}>{film.Plot}</p>
          <p className={styles.film_rating}>
            <span>
              <img src={ratingIcon} alt="ratingIcon" />
            </span>{" "}
            {film.imdbRating}
          </p>
          <p className={styles.film_type}>
            <span>Type:</span> {film.Type}
          </p>
          <p className={styles.film_date}>
            <span>Release Date:</span> {film.Released}
          </p>
          <p className={styles.film_runtime}>
            <span>Run time:</span> {film.Runtime}
          </p>
          <p className={styles.film_genres}>
            <span>Genres:</span> {film.Genre}
          </p>
          <p className={styles.film_actors}>
            <span>Actors:</span> {film.Actors}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
