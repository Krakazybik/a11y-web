import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from './widget/menu';
import { Header } from './widget/header';
import { Content } from './widget/content';
import { Footer } from './widget/footer';
import { MuseumNavigation } from './widget/museum-navigation';
import { Events } from './widget/events';
import { Carousel } from './shared/ui/carousel';
import { Button } from './shared/ui/button';
import styles from './global.module.scss';

const AppLayout = () => (
  <>
    <Header />
    <Menu />
    <Carousel>
      <article
        style={{
          backgroundImage: `url(carousel/slide_1.png)`,
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
      <div>hello</div>
    </Carousel>

    <Content>
      <Events />
      <MuseumNavigation />
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
