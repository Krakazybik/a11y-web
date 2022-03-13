import React from 'react';
import { createPortal } from 'react-dom';
import { GrStatusGood } from 'react-icons/gr';
import { RiErrorWarningLine } from 'react-icons/ri';
import { VscError } from 'react-icons/vsc';
import cn from 'classnames';
import styles from './styles.module.scss';

type AlertProps = {
  text: string;
  level?: 'info' | 'warning' | 'error';
};

export const Alert: React.FC<AlertProps> = ({ text, level = 'info' }) => {
  const alertRoot = document.getElementById('alert-root');
  if (!alertRoot) return null;

  const alertElement = (
    <section
      className={cn(
        styles.Alert,
        level === 'warning' && styles.Alert__Warning,
        level === 'error' && styles.Alert__Error
      )}
      role="alert"
      aria-live="polite"
    >
      {level === 'info' ? (
        <GrStatusGood size="32px" />
      ) : (level === 'warning' ? (
        <RiErrorWarningLine size="32px" />
      ) : (
        <VscError size="32px" />
      ))}
      <p>{text}</p>
    </section>
  );

  return createPortal(alertElement, alertRoot);
};
