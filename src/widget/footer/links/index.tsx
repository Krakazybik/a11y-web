import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

// TODO: No landmark in tree
export const Links: React.FC = () => (
  <nav className={styles.Links__Nav} aria-labelledby="heading-links">
    <h2 id="heading-links" className={styles.visually_hidden}>
      Ссылки
    </h2>
    <ul>
      <li>
        <Link to="/">Посетителям с ограниченными возможностями</Link>
      </li>
      <li>
        <Link to="/">Билеты и льготы</Link>
      </li>
      <li>
        <Link to="/">Противодействие коррупции</Link>
      </li>
    </ul>
  </nav>
);
