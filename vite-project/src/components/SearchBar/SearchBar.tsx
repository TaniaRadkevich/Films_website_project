import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import searchIcon from '../../images/searchIcon.svg';
import { useDispatch } from 'react-redux';
import { fetchFilms } from '../../store/thunks/filmThunk';
import type { AppDispatch } from '../../store/store';
import { clearFilms }  from '../../store/filmSlice'; 



const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      e.preventDefault();
      dispatch(fetchFilms(query));
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      dispatch(clearFilms()); 
    }
  };

  return (
    <div className={styles.searchContainer}>
      <span className={styles.icon}>
        <img src={searchIcon} alt="searchIcon" />
      </span>
      <input
        type="text"
        placeholder="Search Movies or TV Shows"
        className={styles.input}
        value={query}
        onChange={handleChange}
        onKeyDown={handleInput} 
      />
    </div>
  );
};

export default SearchBar;