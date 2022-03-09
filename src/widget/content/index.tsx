import React from 'react';
import styles from './styles.module.scss';

export const Content: React.FC = ({ children }) => (
  <main id="main-content" className={styles.Content} tabIndex={-1}>
    {children}
  </main>
);
