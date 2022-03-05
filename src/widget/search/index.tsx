import React from 'react';
import styles from './styles.module.scss';

export const Search = () => (
  <>
    <label htmlFor="input-search" className={styles.visually_hidden}>
      Поиск
    </label>
    <input className={styles.Search} type="search" id="input-search" />
  </>
);
