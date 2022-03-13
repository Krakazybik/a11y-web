import React from 'react';
import { Events } from 'widget/main/events';
import { MuseumNavigation } from 'widget/main/museum-navigation';
import { Stream } from 'widget/main/stream';
import { Lections } from 'widget/main/lections';
import { AriaSpan } from 'shared/ui/aria-span';
import { Button } from 'shared/ui/button';
import { Carousel } from 'shared/ui/carousel';
import { PageHead } from 'shared/ui/page-head';
import styles from './styles.module.scss';

export const Main = () => (
  <>
    <PageHead header="Гераскин Е.В. - Государственный музей имени Пушкина" />
    <h1 className={styles.visually_hidden}>Главная страница</h1>

    <Carousel>
      <article
        style={{
          backgroundImage: `url(carousel/slide_1.png)`,
          backgroundSize: '100%',
        }}
      >
        <h3 className={styles.visually_hidden} id="slide-header-1">
          От Дюрера до Матисса. Избранные рисунки из собрания ГМИИ им. А.С.
          Пушкина
        </h3>
        <p className={styles.visually_hidden}>
          Выставка проводится с 10 июля до 1 ноября
        </p>
        <address className={styles.visually_hidden}>
          В Главном здание, улица Волхонка, дом 12
        </address>

        <Button
          style={{ position: 'relative', top: '64%', left: '36%' }}
          size="small"
          aria-labelledby="buy-ticket-button slide-header-1"
        >
          Купить онлайн
        </Button>
      </article>

      <article
        style={{
          backgroundImage: `url(carousel/slide_2.jpg)`,
          backgroundSize: '100%',
        }}
      >
        <h3 className={styles.visually_hidden} id="slide-header-2">
          Мумии Древнего Египта. Искусство бессмертия
        </h3>
        <p className={styles.visually_hidden}>
          Выставка проводится с 1 марта до 31 мая
        </p>
        <address className={styles.visually_hidden}>
          В Главном здание, улица Волхонка, дом 12
        </address>
        <Button
          style={{ position: 'relative', top: '48%', left: '8%' }}
          size="small"
          aria-labelledby="buy-ticket-button slide-header-2"
        >
          Купить онлайн
        </Button>
      </article>

      <article
        style={{
          backgroundImage: `url(carousel/slide_3.jpg)`,
          backgroundSize: '100%',
        }}
      >
        <h3 className={styles.visually_hidden} id="slide-header-3">
          Ирина Затуловская. Бегство в Египет.
        </h3>
        <p className={styles.visually_hidden}>
          Выставка проводится с 1 марта до 31 мая
        </p>
        <address className={styles.visually_hidden}>
          В Главном здание, улица Волхонка, дом 12
        </address>
        <Button
          style={{ position: 'relative', top: '48%', left: '8%' }}
          size="small"
          aria-labelledby="buy-ticket-button slide-header-3"
        >
          Купить онлайн
        </Button>
      </article>
    </Carousel>
    <div className={styles.Main}>
      <Events />
      <MuseumNavigation />
      <Stream />
      <Lections />
    </div>
    <AriaSpan id="buy-ticket-button" text="Купить билет онлайн на" />
  </>
);
