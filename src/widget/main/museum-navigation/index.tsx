import React from 'react';
import { TabButton, TabList, TabPanel } from 'shared/ui/tab';
import { Museums } from '../museums';
import { History } from '../history';

const text =
  'Государственный музей изобразительных искусств имени А.С. Пушкина – одно из крупнейших в России художественных собраний зарубежного искусства с древнейших времен до наших дней.\n' +
  '\n' +
  'В современной экспозиции представлены обширная учебная коллекция тонированных гипсовых слепков с произведений Античности, Средних веков и эпохи Возрождения, а также собрание подлинных произведений живописи, скульптуры, графики и декоративно-прикладного искусства.\n' +
  '\n' +
  'В залах первого этажа Главного здания представлены: произведения искусства Древнего Египта, Античности, собрание европейской живописи VIII–XVIII веков; два зала – Итальянский и Греческий дворики – занимают слепки. На втором этаже Главного здания в залах размещены слепки произведений искусства Древней Греции, Рима, Средних веков и Возрождения.\n' +
  '\n' +
  'В начале 2017 года музей определил новое направление своей деятельности – Пушкинский XXI, – ориентированное на современное российское и западное искусство во всех аспектах – выставочном, образовательном и исследовательском. Таким образом, ГМИИ им. А.С. Пушкина представляет собой открытую, интерактивную сцену, демонстрирующую развитие мировой культуры с древности до наших дней, живое, знакомое с детства пространство для получения знаний и общения.';

export const MuseumNavigation = () => {
  const [selectedTab, setSelectedTab] = React.useState('museums');

  const handleClickTab = (event: any) => {
    setSelectedTab(event.target.id);
  };

  return (
    <TabList>
      <h2>Музей</h2>
      <TabButton
        id="museums"
        control="panel-museums"
        selected={selectedTab}
        text="Здания"
        onClick={handleClickTab}
      />

      <TabButton
        id="history"
        control="panel-history"
        selected={selectedTab}
        text="История"
        onClick={handleClickTab}
      />
      <TabPanel
        controlId="panel-museums"
        labelId="museums"
        selected={selectedTab}
      >
        <Museums />
      </TabPanel>
      <TabPanel
        controlId="panel-history"
        labelId="history"
        selected={selectedTab}
      >
        <History
          text={text}
          partIndex={442}
          header="Музей имени А.С. Пушкина"
        />
      </TabPanel>
    </TabList>
  );
};
