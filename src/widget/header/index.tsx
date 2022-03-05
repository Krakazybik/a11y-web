import React from 'react';
import userLogo from '../../shared/assets/user.svg';
import styles from './styles.module.scss';
import { ButtonIcon } from '../../shared/button-icon';
import { Modal } from '../../shared/modal';
import { Auth } from '../auth';
import { LanguageSwitch } from '../language-switch';
import logo from '../../shared/assets/musem.svg';
import { Search } from '../search';

export const Header: React.FC = () => {
  const [modal, showModal] = React.useState(false);

  return (
    <header className={styles.Header}>
      <div>
        <img src={logo} alt="Музей изобразительных искусств имени пушкина" />
      </div>
      <Search />
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
