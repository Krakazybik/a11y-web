import React from 'react';
import { ButtonIcon } from 'shared/ui/button-icon';
import email from 'shared/ui/assets/email.svg';
import telegram from 'shared/ui/assets/telegram.svg';
import facebook from 'shared/ui/assets/facebook.svg';
import styles from './styles.module.scss';

export const SocialNetworks = () => (
  <nav
    className={styles.Social_Networks}
    aria-labelledby="heading-social-networks"
  >
    <h2 id="heading-social-networks">Социальные сети</h2>
    <ButtonIcon role="link" label="email" icon={email} />
    <ButtonIcon role="link" label="telegram" icon={telegram} />
    <ButtonIcon role="link" label="facebook" icon={facebook} />
  </nav>
);
