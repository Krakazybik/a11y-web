import React from 'react';
import { useList } from 'effector-react';
import { Card } from 'shared/ui/card';
import styles from './styles.module.scss';
import { Filter } from './filter';
import { $filteredEvents } from './model';

// TODO: Можно ли для section прятать heading с помощью aria-hidden для отключения дублирования ?

export const Events = () => {
  const events = useList($filteredEvents, (store, index) => (
    <li>
      <Card>
        <img src={store.src} alt="" />
        <h3 id={`event-item-head-${index}`}>{store.header}</h3>
        <p id={`event-item-date-${index}`}>
          <time dateTime="2001-05-15 19:00">{store.endDate}</time>.
        </p>
        <p id={`event-item-text-${index}`}>{store.description}</p>
        <a
          href={store.link}
          id={`event-item-link-${index}`}
          aria-labelledby={`event-item-head-${index} event-item-date-${index} event-item-text-${index} event-item-link-${index}`}
        >
          Купить билет
        </a>
      </Card>
    </li>
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
      <ul>{events}</ul>
    </section>
  );
};
