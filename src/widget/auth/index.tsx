import React from 'react';
import styles from './styles.module.scss';

export const Auth: React.FC = () => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <section
    aria-labelledby="modalHeading"
    className={styles.Auth}
    tabIndex={-1}
    onKeyDown={(event) => console.log(event)}
  >
    <h2 id="modalHeading">Вход</h2>
    <form>
      <label>
        Логин
        <input type="email" />
      </label>

      <label>
        Пароль
        <input type="password" />
      </label>

      <button type="submit">Вход</button>
    </form>
  </section>
);
