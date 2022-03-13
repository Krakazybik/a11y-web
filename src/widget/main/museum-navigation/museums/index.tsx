import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'shared/ui/card';
import styles from './styles.module.scss';

export const Museums = () => (
  <ul className={styles.Museums} aria-label="Все здания музея А.С. Пушкина">
    <li>
      <Card>
        <Link
          style={{ order: 2 }}
          aria-labelledby="card-struct-1-head card-struct-1-address card-struct-link-1"
          id="card-struct-link-1"
          to="/rithert"
        >
          Подробнее
        </Link>
        <img
          src="/assets/structs/struct_1.png"
          alt="Здание мемориальной квартиры Рихтера"
        />
        <h3 id="card-struct-1-head">МЕМОРИАЛЬНАЯ КВАРТИРА С.Т. РИХТЕРА</h3>
        <address id="card-struct-1-address">
          ул. Большая Бронная, 2/6, 16 этаж, кв. 58
        </address>
      </Card>
    </li>

    <li>
      <Card>
        <Link
          style={{ order: 2 }}
          aria-labelledby="card-struct-2-head card-struct-2-address card-struct-link-2"
          id="card-struct-link-2"
          to="/rithert"
        >
          Подробнее
        </Link>
        <img
          src="/assets/structs/struct_2.png"
          alt="Здание мемориальной квартиры Рихтера"
        />
        <h3 id="card-struct-2-head">ЦЭВ «МУСЕЙОН»</h3>
        <address id="card-struct-2-address">
          Колымажный пер., 6/2, 3 (вход с Малого Знаменского переулка)
        </address>
      </Card>
    </li>

    <li>
      <Card>
        <Link
          style={{ order: 2 }}
          aria-labelledby="card-struct-3-head card-struct-3-address card-struct-link-3"
          id="card-struct-link-3"
          to="/rithert"
        >
          Подробнее
        </Link>
        <img
          src="/assets/structs/struct_3.png"
          alt="Здание мемориальной квартиры Рихтера"
        />
        <h3 id="card-struct-3-head">УСАДЬБА ЛОПУХИНЫХ</h3>
        <address id="card-struct-3-address">
          Малый Знаменский пер., 3/5с4
        </address>
      </Card>
    </li>

    <li>
      <Card>
        <Link
          style={{ order: 2 }}
          aria-labelledby="card-struct-4-head card-struct-4-address card-struct-link-4"
          id="card-struct-link-4"
          to="/rithert"
        >
          Подробнее
        </Link>
        <img
          src="/assets/structs/struct_4.png"
          alt="Здание мемориальной квартиры Рихтера"
        />
        <h3 id="card-struct-4-head">УЧЕБНЫЙ МУЗЕЙ</h3>
        <address id="card-struct-4-address">ул. Чаянова, 15</address>
      </Card>
    </li>

    <li>
      <Card>
        <Link
          style={{ order: 2 }}
          aria-labelledby="card-struct-5-head card-struct-5-address card-struct-link-5"
          id="card-struct-link-5"
          to="/rithert"
        >
          Подробнее
        </Link>
        <img
          src="/assets/structs/struct_5.png"
          alt="Здание мемориальной квартиры Рихтера"
        />
        <h3 id="card-struct-5-head">ОТДЕЛ ЛИЧНЫХ КОЛЛЕКЦИЙ</h3>
        <address id="card-struct-5-address">ул. Волхонка, 10</address>
      </Card>
    </li>

    <li>
      <Card>
        <Link
          style={{ order: 2 }}
          aria-labelledby="card-struct-6-head card-struct-6-address card-struct-link-6"
          id="card-struct-link-6"
          to="/rithert"
        >
          Подробнее
        </Link>
        <img
          src="/assets/structs/struct_6.png"
          alt="Здание мемориальной квартиры Рихтера"
        />
        <h3 id="card-struct-6-head">ГАЛЕРЕЯ</h3>
        <address id="card-struct-6-address">ул. Волхонка, 14</address>
      </Card>
    </li>
  </ul>
);
