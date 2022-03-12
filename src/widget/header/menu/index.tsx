import { HashLink } from 'react-router-hash-link';
import React from 'react';
import styles from './styles.module.scss';

export const Menu = () => (
  <nav className={styles.Menu}>
    <ul>
      <li>
        <HashLink to="/#museums">Музей</HashLink>
      </li>
      <li>
        <HashLink to="/visitors/#main-content">Посетителя</HashLink>
      </li>
      <li>
        <HashLink to="/#main-events">Выставки и события</HashLink>
      </li>
    </ul>
  </nav>
);
