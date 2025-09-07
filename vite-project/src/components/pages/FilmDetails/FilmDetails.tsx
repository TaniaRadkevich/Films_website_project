import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/store";
import { fetchFilmDetails } from "../../../store/thunks/filmDetailsThunk";
import { clearFilmDetails } from "../../../store/filmDetailsSlice";
import Header from "../../Header/Header";
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
    <div>
      {" "}
      <Header />
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
            <div className={styles.film_rating_wrapper}>
              <p className={styles.film_rating}>
                <span>
                  <img src={ratingIcon} alt="ratingIcon" />
                </span>{" "}
                {film.imdbRating}
              </p>
            </div>
            <div className={styles.film_type_wrapper}>
              <p className={styles.label}>Type:</p>
              <p className={styles.value}>{film.Type}</p>
            </div>

            <div className={styles.film_date_wrapper}>
              <p className={styles.label}>Release Date:</p>
              <p className={styles.value}>{film.Released}</p>
            </div>

            <div className={styles.film_runtime_wrapper}>
              <p className={styles.label}>Run time:</p>
              <p className={styles.value}>{film.Runtime}</p>
            </div>

            <div className={styles.film_genres_wrapper}>
              <p className={styles.label}>Genres:</p>
              <p className={styles.value}>{film.Genre}</p>
            </div>

            <div className={styles.film_actors_wrapper}>
              <p className={styles.label}>Actors:</p>
              <p className={styles.value}>{film.Actors}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
