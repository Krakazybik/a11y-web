import React from 'react';
import styles from './styles.module.scss';

export const Modal: React.FC = ({ children }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions
  <div
    className={styles.Modal__Background}
    aria-modal="true"
    role="dialog"
    onKeyDown={(event) => console.log(event.key === 'Escape')}
  >
    <div className={styles.Modal__Card}>{children}</div>
  </div>
);
