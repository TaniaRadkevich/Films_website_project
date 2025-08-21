import React from 'react';
import styles from './SearchBar.module.scss';
import searchIcon from '../../images/searchIcon.svg'

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <span className={styles.icon}>
        <img src = {searchIcon} alt ='searchIcon' />
      </span>
      <input
        type="text"
        placeholder="Search Movies or TV Shows"
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;