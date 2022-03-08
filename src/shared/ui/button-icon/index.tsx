import React from 'react';
import cn from 'classnames';
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
> = ({ type = 'button', label, icon, className, ...props }) => (
  <button className={cn(styles.Button_Icon, className)} type={type} {...props}>
    <span className={styles.visually_hidden}>{label}</span>
    <img
      className={styles.Icon}
      src={icon}
      width={48}
      height={48}
      aria-hidden
      alt=""
    />
  </button>
);
