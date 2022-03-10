import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Alert } from 'shared/ui/alert';
import { Button } from 'shared/ui/button';
import { UnderlinedInput } from 'shared/ui/underlined-input';
import styles from './styles.module.scss';

// TODO: Agree condition alert

export const Subscribe: React.FC = () => {
  const [alert, showAlert] = useState(false);
  const [alignment, setAlignment] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => showAlert(false), 8000);

    return () => clearTimeout(timer);
  }, [alert, showAlert]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (alignment) {
      showAlert(true);
    }
  };

  const handleChangeAlignment = (event: ChangeEvent<HTMLInputElement>) => {
    setAlignment(event.target.checked);
  };

  return (
    <section aria-labelledby="subscribe-heading">
      <h2 id="subscribe-heading">Подписка на новости</h2>
      <form className={styles.Subscribe} onSubmit={handleSubmit}>
        <div className={styles.Subscribe__Input}>
          <UnderlinedInput type="email" placeholder="Email" />
          <div>
            <input
              type="checkbox"
              id="subscribe-alignment"
              onChange={handleChangeAlignment}
            />
            <label htmlFor="subscribe-alignment">
              Согласен на обработку персональных данных
            </label>
          </div>
          <Button type="submit" size="small">
            Подписаться
          </Button>
        </div>
      </form>
      {alert && <Alert text="Вы успешно подписались на новостную рассылку." />}
    </section>
  );
};
