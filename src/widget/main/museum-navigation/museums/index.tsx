import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'shared/ui/card';
import styles from './styles.module.scss';

// TODO: Groups section role=group?
export const Museums = () => (
  <div
    role="group"
    className={styles.Museums}
    aria-label="Все здания музея А.С. Пушкина"
  >
    <Card>
      <img src="/struct_1.png" alt="Здание мемориальной квартиры Рихтера" />
      <h3 id="card-struct-1">МЕМОРИАЛЬНАЯ КВАРТИРА С.Т. РИХТЕРА</h3>
      <address>ул. Большая Бронная, 2/6, 16 этаж, кв. 58</address>
      <Link
        aria-labelledby="card-struct-link-1 card-struct-1"
        id="card-struct-link-1"
        to="/rithert"
      >
        Подробнее
      </Link>
    </Card>

    <Card>
      <img src="/struct_2.png" alt="Здание мемориальной квартиры Рихтера" />
      <h3 id="card-struct-2">ЦЭВ «МУСЕЙОН»</h3>
      <address>
        Колымажный пер., 6/2, 3 (вход с Малого Знаменского переулка)
      </address>
      <Link
        aria-labelledby="card-struct-link-2 card-struct-2"
        id="card-struct-link-2"
        to="/rithert"
      >
        Подробнее
      </Link>
    </Card>

    <Card>
      <img src="/struct_3.png" alt="Здание мемориальной квартиры Рихтера" />
      <h3 id="card-struct-3">УСАДЬБА ЛОПУХИНЫХ</h3>
      <address>Малый Знаменский пер., 3/5с4</address>
      <Link
        aria-labelledby="card-struct-link-3 card-struct-3"
        id="card-struct-link-3"
        to="/rithert"
      >
        Подробнее
      </Link>
    </Card>

    <Card>
      <img src="/struct_4.png" alt="Здание мемориальной квартиры Рихтера" />
      <h3 id="card-struct-4">УЧЕБНЫЙ МУЗЕЙ</h3>
      <address>ул. Чаянова, 15</address>
      <Link
        aria-labelledby="card-struct-link-4 card-struct-4"
        id="card-struct-link-4"
        to="/rithert"
      >
        Подробнее
      </Link>
    </Card>

    <Card>
      <img src="/struct_5.png" alt="Здание мемориальной квартиры Рихтера" />
      <h3 id="card-struct-5">ОТДЕЛ ЛИЧНЫХ КОЛЛЕКЦИЙ</h3>
      <address>ул. Волхонка, 10</address>
      <Link
        aria-labelledby="card-struct-link-5 card-struct-5"
        id="card-struct-link-5"
        to="/rithert"
      >
        Подробнее
      </Link>
    </Card>

    <Card>
      <img src="/struct_6.png" alt="Здание мемориальной квартиры Рихтера" />
      <h3 id="card-struct-6">ГАЛЕРЕЯ</h3>
      <address>ул. Волхонка, 14</address>
      <Link
        aria-labelledby="card-struct-link-6 card-struct-6"
        id="card-struct-link-6"
        to="/rithert"
      >
        Подробнее
      </Link>
    </Card>
  </div>
);
