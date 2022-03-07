import React from 'react';
import { ButtonIcon } from '../../shared/button-icon';
import email from '../../shared/assets/email.svg';
import telegram from '../../shared/assets/telegram.svg';
import facebook from '../../shared/assets/facebook.svg';

export const SocialNetworks = () => (
  <>
    <ButtonIcon label="email" icon={email} />
    <ButtonIcon label="telegram" icon={telegram} />
    <ButtonIcon label="facebook" icon={facebook} />
  </>
);
