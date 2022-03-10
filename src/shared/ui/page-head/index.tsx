import React from 'react';
import { Helmet } from 'react-helmet';
import { createPortal } from 'react-dom';
import styles from 'global.module.scss';

type PageHeadProps = {
  header: string;
};

export const PageHead: React.FC<PageHeadProps> = ({ header }) => {
  const pageHeadNode = (
    <>
      <Helmet>{header}</Helmet>
      <h1 className={styles.visually_hidden}>{header}</h1>
    </>
  );

  const rootPageHead = document.getElementById('root');
  if (!rootPageHead) return null;

  return createPortal(pageHeadNode, rootPageHead);
};
