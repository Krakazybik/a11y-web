import React from 'react';
import styles from './styles.module.scss';

export const Input: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <input className={styles.Input} {...props} />
);
