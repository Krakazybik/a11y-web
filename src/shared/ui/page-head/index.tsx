import React from 'react';
import { Helmet } from 'react-helmet';
import { createPortal } from 'react-dom';

type PageHeadProps = {
  header: string;
};

export const PageHead: React.FC<PageHeadProps> = ({ header }) => {
  const pageHeadNode = (
    <Helmet>
      <title>{header}</title>
    </Helmet>
  );

  const rootPageHead = document.getElementById('root');
  if (!rootPageHead) {
    console.error('Header element not found');
    return null;
  }

  return createPortal(pageHeadNode, rootPageHead);
};
