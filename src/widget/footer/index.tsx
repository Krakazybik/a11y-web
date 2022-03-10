import React from 'react';
import styles from './styles.module.scss';
import { Subscribe } from './subscribe';
import { SocialNetworks } from './social-networks';
import { Links } from './links';

export const Footer: React.FC = () => (
  <div className={styles.Footer__Wrapper}>
    <footer className={styles.Footer}>
      <div>
        <Links />
        <SocialNetworks />
      </div>
      <Subscribe />
    </footer>
  </div>
);
