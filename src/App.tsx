import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import logo from './shared/assets/musem.svg';
import { Menu } from './widget/menu';
import { Search } from './widget/search';

import { Header } from './widget/header';

const AppLayout = () => (
  <>
    <Header />
    <img src={logo} alt="Музей изобразительных искусств имени пушкина" />
    <Menu /> <Search />
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
