import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './widget/header';
import { Content } from './widget/content';
import { Footer } from './widget/footer';
import { Stream } from './widget/stream';
import { MuseumNavigation } from './widget/museum-navigation';
import { Events } from './widget/events';
import { Carousel } from './shared/ui/carousel';
import { Button } from './shared/ui/button';
import styles from './global.module.scss';
import { Lections } from './widget/lections';

const AppLayout = () => (
  <>
    <Header />
    <Content>
      <h1>Музей имени А.С. Пушкина</h1>
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
          <p className={styles.visually_hidden}>С 10 июля до 1 ноября</p>
          <address className={styles.visually_hidden}>Главное здание</address>
          <Button
            style={{ position: 'relative', top: 460, left: 48 }}
            size="small"
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
            Ирина Затуловская. Бегство в Египет
          </h3>
          <p className={styles.visually_hidden}>С 1 марта до 31 мая</p>
          <address className={styles.visually_hidden}>
            Главное здание, Волхонка 12
          </address>
          <Button
            style={{ position: 'relative', top: 282, left: 72 }}
            size="small"
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
            Мумии Древнего Египта. Искусство бессмертия
          </h3>
          <p className={styles.visually_hidden}>С 1 марта до 31 мая</p>
          <address className={styles.visually_hidden}>
            Главное здание, Волхонка 12
          </address>
          <Button
            style={{ position: 'relative', top: 282, left: 72 }}
            size="small"
          >
            Купить онлайн
          </Button>
        </article>
      </Carousel>
      <Events />
      <MuseumNavigation />
      <Stream />
      <Lections />
    </Content>
    <Footer />
  </>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
