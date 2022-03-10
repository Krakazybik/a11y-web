import { createEvent, createStore, sample } from 'effector';

type MuseumEvent = {
  header: string;
  endDate: string;
  description: string;
  src: string;
  link: string;
};

const events: Array<MuseumEvent> = [
  {
    header: 'Святослав Рихтер в кругу друзей. Москва — Коктебель',
    endDate: 'Выставка до 20 ноября',
    description:
      'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
    src: '/events/event1.png',
    link: '',
  },
  {
    header: 'Тату',
    endDate: 'Выставка до 27 сентября',
    description:
      'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
    src: '/events/event2.png',
    link: '',
  },
  {
    header:
      'От Дюрера до Матисса. Избранные рисунки из собрания ГМИИ им. А.С. Пушкина',
    endDate: 'Выставка до 1 ноября',
    description:
      'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
    src: '/events/event3.png',
    link: '',
  },
];

const $events = createStore(events);
export type FilterTypes = 'all' | 'today' | 'tomorrow';

export const $filteredEvents = createStore<Array<MuseumEvent>>(events);
export const filterEvents = createEvent<FilterTypes>();
export const $activeFilter = createStore<FilterTypes>('all');

sample({ clock: filterEvents, target: $activeFilter });

sample({
  clock: $activeFilter,
  source: $events,
  fn: (source, clock) => {
    switch (clock) {
      case 'today':
        return source.slice(0, -1);
      case 'tomorrow':
        return source.slice(2);
      default:
        return source;
    }
  },
  target: $filteredEvents,
});
