import React from 'react';
import styles from './styles.module.scss';

export const UnderlinedInput: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => <input className={styles.UnderlinedInput} {...props} />;
