import React from 'react';
import styles from './styles.module.scss';
import { AriaSpan } from '../../../shared/ui/aria-span';

export const Lections = () => (
  <section className={styles.Lections}>
    <h2>Экскурсии и лекции в прямом эфире</h2>

    <p id="lections-about">
      С 1 июля вы можете присоединиться к нашим виртуальным мероприятиям —
      экскурсиям и лекциям для взрослых и детей, оплатив участие на сайте.
      Встречи будут проходить в прямом эфире на платформе Zoom; предусмотрен
      формат живого общения с возможностью задавать вопросы экскурсоводу
      (лектору).
    </p>
    <a href="/" aria-labelledby="lections-about-link">
      Подробнее
    </a>
    <p>
      Мы будем благодарны за любое
      <a href="/"> пожертвование</a>. Все поступившие средства будут направлены
      на организацию онлайн-проектов для наших посетителей.
    </p>
    <AriaSpan
      id="lections-about-link"
      text="Подробнее о виртуальных мероприятиях"
    />
  </section>
);
