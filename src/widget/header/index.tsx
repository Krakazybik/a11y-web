import React from 'react';
import userLogo from '../../shared/ui/assets/user.svg';
import styles from './styles.module.scss';
import { ButtonIcon } from '../../shared/ui/button-icon';
import { Modal } from '../../shared/ui/modal';
import { Auth } from './auth';
import { LanguageSwitch } from './language-switch';
import logo from '../../shared/ui/assets/musem.svg';
import { Search } from './search';
import { Menu } from './menu';

export const Header: React.FC = () => {
  const [modal, showModal] = React.useState(false);

  return (
    <header className={styles.Header} id="header-root">
      <div className={styles.Logo}>
        <img
          src={logo}
          alt="Музей изобразительных искусств имени пушкина"
          width={202}
          height={42}
        />
        <a href="#main-content" className={styles.SkipLink}>
          Перейти к основному контенту
        </a>
      </div>
      <div className={styles.Controls}>
        <Search />
        <LanguageSwitch />
        <ButtonIcon
          label="Вход"
          icon={userLogo}
          onClick={() => showModal(true)}
        />
      </div>
      {modal && (
        <Modal title="Авторизация - Вход" onClose={() => showModal(false)}>
          <Auth />
        </Modal>
      )}
      <Menu />
    </header>
  );
};
