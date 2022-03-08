import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type ButtonProps = {
  size: 'small' | 'mid' | 'large';
};

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    ButtonProps
> = ({ size = 'mid', children, type = 'button', ...props }) => (
  <button
    type={type}
    className={cn(
      styles.Button,
      size === 'small'
        ? styles.Button_Small
        : (size === 'large'
        ? styles.Button_Large
        : styles.Button_Mid)
    )}
    {...props}
  >
    {children}
  </button>
);
