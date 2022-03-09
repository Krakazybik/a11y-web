import React, { FormEvent, useEffect, useState } from 'react';
import { Alert } from 'shared/ui/alert';
import { Button } from 'shared/ui/button';
import { UnderlinedInput } from 'shared/ui/underlined-input';
import styles from './styles.module.scss';

export const Subscribe: React.FC = () => {
  const [alert, showAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => showAlert(false), 8000);

    return () => clearTimeout(timer);
  }, [alert, showAlert]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    showAlert(true);
  };

  return (
    <section aria-labelledby="subscribe-heading">
      <h2 id="subscribe-heading">Подписка на новости</h2>
      <form className={styles.Subscribe} onSubmit={handleSubmit}>
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
      {alert && <Alert text="Вы успешно подписались на новостную рассылку." />}
    </section>
  );
};
