import React from 'react';
import styles from './styles.module.scss';

export const SquareButton: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => (
  // eslint-disable-next-line react/button-has-type
  <button className={styles.SquareButton} {...props} />
);
