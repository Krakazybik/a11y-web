import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Subscribe } from '../subscribe';

export const Footer: React.FC = () => (
  <div className={styles.Footer__Wrapper}>
    <footer className={styles.Footer}>
      <div>
        <nav className={styles.Footer__Nav}>
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
        <section>
          <h3>Социальные сети</h3>
        </section>
      </div>
      <aside>
        <h3>Подписка на новости</h3>
        <Subscribe />
      </aside>
    </footer>
  </div>
);
