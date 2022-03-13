import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type IconButtonProps = {
  label: string;
  icon: any;
  width?: number;
  height?: number;
};

export const ButtonIcon: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    IconButtonProps
> = ({
  type = 'button',
  label,
  icon,
  className,
  width = 48,
  height = 48,
  ...props
}) => (
  <button className={cn(styles.Button_Icon, className)} type={type} {...props}>
    <span className={styles.visually_hidden}>{label}</span>
    <img
      className={styles.Icon}
      src={icon}
      width={width}
      height={height}
      aria-hidden
      alt=""
    />
  </button>
);
