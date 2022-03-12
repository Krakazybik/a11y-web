import React from 'react';
import lodash from 'lodash';
import { useLocation } from 'react-router-dom';

export const getUniqueId = (prefix: string) => `${prefix}-${lodash.uniqueId()}`;

export const useAnchor = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    const anchorElement = hash && document.getElementById(hash.slice(1));
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth' });
      anchorElement.focus();
    } else {
      console.log('Anchor element not found');
    }
  }, [hash]);
};
