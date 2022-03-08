import React from 'react';
import { ButtonIcon } from '../../shared/ui/button-icon';
import email from '../../shared/ui/assets/email.svg';
import telegram from '../../shared/ui/assets/telegram.svg';
import facebook from '../../shared/ui/assets/facebook.svg';
import styles from './styles.module.scss';

export const SocialNetworks = () => (
  <section className={styles.Social_Networks}>
    <h3>Социальные сети</h3>
    <ButtonIcon label="email" icon={email} />
    <ButtonIcon label="telegram" icon={telegram} />
    <ButtonIcon label="facebook" icon={facebook} />
  </section>
);
