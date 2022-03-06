import React from 'react';
import styles from './styles.module.scss';

export const Content: React.FC = ({ children }) => (
  <div className={styles.Content}>{children}</div>
);
