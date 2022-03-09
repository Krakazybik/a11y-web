import React from 'react';
import styles from './styles.module.scss';
import { Button } from '../../shared/ui/button';
import { UnderlinedInput } from '../../shared/ui/underlined-input';

export const Subscribe: React.FC = () => (
  <aside aria-labelledby="subscribe-heading">
    <h2 id="subscribe-heading">Подписка на новости</h2>
    <form className={styles.Subscribe}>
      <div className={styles.Subscribe__Input}>
        <UnderlinedInput type="email" placeholder="Email" width={303} />
        <Button type="submit" size="small">
          Подписаться
        </Button>
      </div>

      <div>
        <input type="checkbox" id="subscribe-alignment" />
        <label htmlFor="subscribe-alignment">
          Согласен на обработку персональных данных
        </label>
      </div>
    </form>
  </aside>
);
