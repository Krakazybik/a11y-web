import React from 'react';
import { PageHead } from 'shared/ui/page-head';
import { useAnchor } from 'shared/lib';
import styles from './styles.module.scss';

export const Search = () => {
  useAnchor();

  return (
    <>
      <PageHead header="Результаты поиска" />
      <section>
        <h1 id="search-result">Найденные билеты:</h1>
        <table className={styles.Result_Table}>
          <caption>Найденные выставки</caption>
          <thead>
            <tr>
              <th>Выставка</th>
              <th>Дата</th>
              <th>Цена, рублей</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>От Дюрера до Матисса.</td>
              <td>27 сентября</td>
              <td>900</td>
            </tr>
            <tr>
              <td>Мумии Древнего Египта. Искусство бессмертия</td>
              <td>28 сентября</td>
              <td>1200</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
