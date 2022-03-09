import React from 'react';
import searchLogo from './assets/search.svg';
import styles from './styles.module.scss';
import { AriaSpan } from '../../shared/ui/aria-span';

// TODO: ROLE SEARCH LANDMARK
// TODO: fix labels
export const Search = () => (
  <form
    className={styles.Search_Wrapper}
    role="search"
    aria-labelledby="search-label"
  >
    <AriaSpan id="search-label" text="Поиск" />
    <AriaSpan id="search-action" text="Введите значение для поиска" />
    <input
      className={styles.Search}
      type="search"
      aria-labelledby="search-action"
    />
    <button
      className={styles.Search_Button}
      type="submit"
      aria-labelledby="search-result"
    >
      <img src={searchLogo} alt="" aria-hidden />
      <AriaSpan id="search-result" text="Показать результат поиска" />
    </button>
  </form>
);
