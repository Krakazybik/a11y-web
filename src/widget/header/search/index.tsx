import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AriaSpan } from 'shared/ui/aria-span';
import searchLogo from './assets/search.svg';
import styles from './styles.module.scss';

// TODO: ROLE SEARCH LANDMARK
// TODO: fix labels
export const Search = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/search/#main-content');
  };

  return (
    <form
      className={styles.Search_Wrapper}
      role="search"
      aria-labelledby="search-label"
      onSubmit={handleSubmit}
    >
      <AriaSpan id="search-label" text="Найти билеты на выставки" />
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
};
