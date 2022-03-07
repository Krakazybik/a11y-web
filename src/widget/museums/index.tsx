import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../shared/card';
import styles from './styles.module.scss';

export const Museums = () => (
  <div className={styles.Museums}>
    <Card>
      <img src="/struct_1.png" alt="Здание мемориальной квартиры Рихтера" />
      <h3>МЕМОРИАЛЬНАЯ КВАРТИРА С.Т. РИХТЕРА</h3>
      <address>ул. Большая Бронная, 2/6, 16 этаж, кв. 58</address>
      <Link to="/rithert">Подробнее</Link>
    </Card>
    <Card>
      <img src="/struct_2.png" alt="Здание мемориальной квартиры Рихтера" />
      <h3>ЦЭВ «МУСЕЙОН»</h3>
      <address>
        Колымажный пер., 6/2, 3 (вход с Малого Знаменского переулка)
      </address>
      <Link to="/rithert">Подробнее</Link>
    </Card>
    <Card>
      <img src="/struct_3.png" alt="Здание мемориальной квартиры Рихтера" />
      <h3>УСАДЬБА ЛОПУХИНЫХ</h3>
      <address>Малый Знаменский пер., 3/5с4</address>
      <Link to="/rithert">Подробнее</Link>
    </Card>
    <Card>
      <img src="/struct_4.png" alt="Здание мемориальной квартиры Рихтера" />
      <h3>УЧЕБНЫЙ МУЗЕЙ</h3>
      <address>ул. Чаянова, 15</address>
      <Link to="/rithert">Подробнее</Link>
    </Card>
    <Card>
      <img src="/struct_5.png" alt="Здание мемориальной квартиры Рихтера" />
      <h3>ОТДЕЛ ЛИЧНЫХ КОЛЛЕКЦИЙ</h3>
      <address>ул. Волхонка, 10</address>
      <Link to="/rithert">Подробнее</Link>
    </Card>
    <Card>
      <img src="/struct_6.png" alt="Здание мемориальной квартиры Рихтера" />
      <h3>ГАЛЕРЕЯ</h3>
      <address>ул. Волхонка, 14</address>
      <Link to="/rithert">Подробнее</Link>
    </Card>
  </div>
);
