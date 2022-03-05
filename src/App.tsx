import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from './widget/menu';
import { Header } from './widget/header';

const AppLayout = () => (
  <>
    <Header />
    <Menu />
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
