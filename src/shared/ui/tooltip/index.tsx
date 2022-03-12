import React from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

type ToolTipProps = {
  elementId: string;
  text: string;
};

export const ToolTip: React.FC<ToolTipProps> = ({ elementId, text }) => {
  const toolTip = (
    <div role="tooltip" className={styles.ToolTip}>
      {text}
    </div>
  );
  const targetElement = document.getElementById(elementId);
  if (!targetElement) {
    console.error(`Target tooltip element: ${text} not found.`);
    return null;
  }
  return createPortal(toolTip, targetElement);
};
