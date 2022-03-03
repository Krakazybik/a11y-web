import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles.module.scss';

export const Menu = () => (
  <nav className={styles.Menu}>
    <ul>
      <li>
        <Link to="/">Музей </Link>
      </li>
      <li>
        <Link to="/">Посетителя</Link>
      </li>
      <li>
        <Link to="/">Выставки и события</Link>
      </li>
    </ul>
  </nav>
);
