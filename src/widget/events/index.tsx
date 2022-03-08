import React from 'react';
import { useList } from 'effector-react';
import styles from './styles.module.scss';
import { Filter } from './filter';
import { $filteredEvents } from './model';
import { Card } from '../../shared/ui/card';

export const Events = () => {
  const events = useList($filteredEvents, (store) => (
    <Card>
      <img src={store.src} alt="" />
      <h4>{store.header}</h4>
      <p>
        Выставка до <time dateTime="2001-05-15 19:00">{store.endDate}</time>.
      </p>
      <p>{store.description}</p>
      <a href={store.link}>Купить билет</a>
    </Card>
  ));

  return (
    <section className={styles.Events}>
      <h3>Выставки и события</h3>
      <Filter />
      {events}
    </section>
  );
};
