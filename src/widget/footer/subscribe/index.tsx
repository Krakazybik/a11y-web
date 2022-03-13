import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Alert } from 'shared/ui/alert';
import { Button } from 'shared/ui/button';
import { UnderlinedInput } from 'shared/ui/underlined-input';
import styles from './styles.module.scss';

export const Subscribe: React.FC = () => {
  const [alert, showAlert] = useState(false);
  const [error, showError] = useState(false);
  const [alignment, setAlignment] = useState(false);

  // TODO: Avoid code duplicate
  useEffect(() => {
    const timer = setTimeout(() => showAlert(false), 8000);

    return () => clearTimeout(timer);
  }, [alert, showAlert]);

  useEffect(() => {
    const timer = setTimeout(() => showError(false), 8000);

    return () => clearTimeout(timer);
  }, [error, showError]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (alignment) {
      showAlert(true);
    } else {
      showError(true);
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
      {error && (
        <Alert
          text="Необходимо подтвердить согласие на обработку персональных данных."
          level="error"
        />
      )}
    </section>
  );
};
