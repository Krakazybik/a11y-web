import React from 'react';
import { useStore } from 'effector-react';
import cn from 'classnames';
import { $activeFilter, filterEvents } from '../model';
import styles from './styles.module.scss';

export const Filter: React.FC = () => {
  const activeFilter = useStore($activeFilter);

  return (
    <div role="group" className={styles.Filter} aria-label="Фильтр событий">
      <button
        className={cn(
          styles.FilterButton,
          activeFilter === 'all' && styles.Active
        )}
        onClick={() => filterEvents('all')}
      >
        Все
      </button>
      <button
        className={cn(
          styles.FilterButton,
          activeFilter === 'today' && styles.Active
        )}
        onClick={() => filterEvents('today')}
      >
        Сегодня
      </button>
      <button
        className={cn(
          styles.FilterButton,
          activeFilter === 'tomorrow' && styles.Active
        )}
        onClick={() => filterEvents('tomorrow')}
      >
        Завтра
      </button>
    </div>
  );
};
