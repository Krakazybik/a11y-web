import React from 'react';
import { useList } from 'effector-react';
import { Card } from 'shared/ui/card';
import styles from './styles.module.scss';
import { Filter } from './filter';
import { $filteredEvents } from './model';

// TODO: Можно ли для section прятать heading с помощью aria-hidden для отключения дублирования ?

export const Events = () => {
  const events = useList($filteredEvents, (store) => (
    <Card>
      <img src={store.src} alt="" />
      <h3>{store.header}</h3>
      <p>
        Выставка до <time dateTime="2001-05-15 19:00">{store.endDate}</time>.
      </p>
      <p>{store.description}</p>
      <a href={store.link}>Купить билет</a>
    </Card>
  ));

  return (
    <section
      id="main-events"
      className={styles.Events}
      aria-labelledby="heading-events"
    >
      <h2 id="heading-events">Выставки и события</h2>
      <Filter />
      {/* TODO: group? */}
      {events}
    </section>
  );
};
