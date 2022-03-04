import React from 'react';
import { getUniqueId } from '../utils';
import styles from './styles.module.scss';

type IconButtonProps = {
  label: string;
  icon: any;
};

export const ButtonIcon: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    IconButtonProps
> = ({ type = 'button', label, icon, ...props }) => (
  <>
    <label
      htmlFor={getUniqueId('button-icon')}
      className={styles.visually_hidden}
    >
      {label}
    </label>
    <button
      className={styles.Button_Icon}
      type={type}
      id={getUniqueId('button-icon')}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        className={styles.Icon}
        src={icon}
        width={48}
        height={48}
        aria-hidden
      />
    </button>
  </>
);
