import React from 'react';
import userLogo from '../../shared/assets/user.svg';
import styles from './styles.module.scss';
import { ButtonIcon } from '../../shared/button-icon';
import { Modal } from '../../shared/modal';
import { Auth } from '../auth';
import { LanguageSwitch } from '../../shared/language-switch';

export const Header: React.FC = () => {
  const [modal, showModal] = React.useState(false);

  return (
    <header className={styles.Header}>
      <div>logo</div>
      <div>search</div>
      <LanguageSwitch />
      <ButtonIcon
        label="Вход"
        icon={userLogo}
        onClick={() => showModal(true)}
      />
      {modal && (
        <Modal title="Авторизация - Вход" onClose={() => showModal(false)}>
          <Auth />
        </Modal>
      )}
    </header>
  );
};
