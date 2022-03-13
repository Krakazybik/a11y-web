import React from 'react';
import styles from './styles.module.scss';

export const Content: React.FC = ({ children }) => (
  <div className={styles.Content__Wrapper}>
    <main id="main-content" className={styles.Content} tabIndex={-1}>
      {children}
    </main>
  </div>
);
