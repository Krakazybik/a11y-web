import React from 'react';
import styles from './styles.module.scss';

type AriaSpanProps = {
  id: string;
  text: string;
};

export const AriaSpan: React.FC<AriaSpanProps> = ({ id, text }) => (
  <span id={id} className={styles.visually_hidden} aria-hidden>
    {text}
  </span>
);
