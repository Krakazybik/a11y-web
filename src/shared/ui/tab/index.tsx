import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export const TabList: React.FC = ({ children }) => (
  <div role="tablist">{children}</div>
);

type TabButtonProps = {
  id: string;
  control: string;
  selected: string;
  text: string;
  onClick: (_: any) => void;
};

export const TabButton: React.FC<TabButtonProps> = ({
  id,
  control,
  selected,
  text,
  onClick,
}) => (
  <button
    className={cn(styles.TabButton, selected === id && styles.Active)}
    id={id}
    role="tab"
    aria-controls={control}
    aria-selected={selected === id}
    tabIndex={selected ? 0 : -1}
    onClick={onClick}
  >
    {text}
  </button>
);

type TabPanelProps = {
  controlId: string;
  labelId: string;
  selected: string;
};

export const TabPanel: React.FC<TabPanelProps> = ({
  controlId,
  labelId,
  children,
  selected,
}) => (
  <section
    role="tabpanel"
    id={controlId}
    aria-labelledby={labelId}
    tabIndex={0}
    hidden={selected !== labelId}
  >
    {children}
  </section>
);
