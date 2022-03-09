import React from 'react';
import searchLogo from './assets/search.svg';
import styles from './styles.module.scss';

// TODO: ROLE SEARCH LANDMARK
export const Search = () => (
  <form
    className={styles.Search_Wrapper}
    role="search"
    aria-labelledby="search-label"
  >
    <label
      id="search-label"
      htmlFor="input-search"
      className={styles.visually_hidden}
    >
      Поиск
    </label>
    <input className={styles.Search} type="search" id="input-search" />
    <button className={styles.Search_Button} type="submit">
      <img src={searchLogo} alt="" aria-hidden />
    </button>
  </form>
);
