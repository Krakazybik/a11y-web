import React from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

type AlertProps = {
  text: string;
};

export const Alert: React.FC<AlertProps> = ({ text }) => {
  const alertRoot = document.getElementById('alert-root');
  if (!alertRoot) return null;

  const alertElement = (
    <div className={styles.Alert} role="alert" aria-live="polite">
      {text}
    </div>
  );

  return createPortal(alertElement, alertRoot);
};
