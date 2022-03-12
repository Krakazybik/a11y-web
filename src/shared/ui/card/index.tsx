import React from 'react';
import styles from './styles.module.scss';

export const Card: React.FC = ({ children }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
  <div className={styles.Card}>{children}</div>
);
