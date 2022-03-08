import React from 'react';
import styles from './styles.module.scss';
import { Input } from '../../shared/ui/input';
import { Button } from '../../shared/ui/button';

export const Auth: React.FC = () => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <div aria-labelledby="modalHeading" className={styles.Auth}>
    <h2 id="modalHeading">Вход</h2>
    <form>
      <label htmlFor="authEmail" className={styles.visually_hidden}>
        Логин
      </label>
      <Input type="email" placeholder="Логин" id="authEmail" />

      <label htmlFor="authPassword" className={styles.visually_hidden}>
        Пароль
      </label>
      <Input type="password" placeholder="Пароль" id="authPassword" />

      <Button size="large" type="submit">
        Вход
      </Button>
    </form>
  </div>
);
