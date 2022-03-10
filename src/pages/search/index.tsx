import React from 'react';
import { PageHead } from 'shared/ui/page-head';
import styles from './styles.module.scss';

export const Search = () => (
  <>
    <PageHead header="Государственный музей имени Пушкина" />
    <section>
      <h2>Найденные билеты:</h2>
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
