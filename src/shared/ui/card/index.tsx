import React from 'react';
import styles from './styles.module.scss';

export const Card: React.FC = ({ children }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
  <article tabIndex={0} className={styles.Card}>
    {children}
  </article>
);
