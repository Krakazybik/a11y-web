import React from 'react';
import styles from './styles.module.scss';

export const Card: React.FC = ({ children }) => (
  <article className={styles.Card}>{children}</article>
);
