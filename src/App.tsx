import React from 'react';
import './App.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Menu } from './widget/menu';
import { Header } from './widget/header';
import { History } from './widget/history';
import { Content } from './widget/content';
import { Footer } from './widget/footer';
import { Card } from './shared/card';
import { Museums } from './widget/museums';
import { MuseumNavigation } from './widget/museum-navigation';

const text =
  'Государственный музей изобразительных искусств имени А.С. Пушкина – одно из крупнейших в России художественных собраний зарубежного искусства с древнейших времен до наших дней.\n' +
  '\n' +
  'В современной экспозиции представлены обширная учебная коллекция тонированных гипсовых слепков с произведений Античности, Средних веков и эпохи Возрождения, а также собрание подлинных произведений живописи, скульптуры, графики и декоративно-прикладного искусства.\n' +
  '\n' +
  'В залах первого этажа Главного здания представлены: произведения искусства Древнего Египта, Античности, собрание европейской живописи VIII–XVIII веков; два зала – Итальянский и Греческий дворики – занимают слепки. На втором этаже Главного здания в залах размещены слепки произведений искусства Древней Греции, Рима, Средних веков и Возрождения.\n' +
  '\n' +
  'В начале 2017 года музей определил новое направление своей деятельности – Пушкинский XXI, – ориентированное на современное российское и западное искусство во всех аспектах – выставочном, образовательном и исследовательском. Таким образом, ГМИИ им. А.С. Пушкина представляет собой открытую, интерактивную сцену, демонстрирующую развитие мировой культуры с древности до наших дней, живое, знакомое с детства пространство для получения знаний и общения.';

const AppLayout = () => (
  <>
    <Header />
    <Menu />
    <Content>
      <MuseumNavigation />
      <Routes>
        <Route
          path="/history"
          element={
            <History
              text={text}
              partIndex={128}
              header="Музей имени А.С. Пушкина"
            />
          }
        />
        <Route path="/museums" element={<Museums />} />
      </Routes>
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
