import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import cn from 'classnames';
import styles from './styles.module.scss';

export const MuseumNavigation = () => {
  const active = useMatch({ path: 'museums', end: true });

  return (
    <nav className={styles.MuseumNav}>
      <Link to="/museums" className={cn(active && styles.Active)}>
        Здания
      </Link>
      <Link to="/history" className={cn(!active && styles.Active)}>
        История
      </Link>
    </nav>
  );
};
