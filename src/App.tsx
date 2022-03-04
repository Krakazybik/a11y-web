import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from './widget/menu';
import { Search } from './widget/search';
import { Modal } from './widget/modal';
import { Auth } from './widget/auth';

const AppLayout = () => {
  const [modal, showModal] = React.useState(false);

  return (
    <header>
      Header
      <Menu /> <Search />
      <button type="button" onClick={() => showModal(true)}>
        Enter
      </button>
      {modal && (
        <Modal title="Авторизация - Вход" onClose={() => showModal(false)}>
          <Auth />
        </Modal>
      )}
    </header>
  );
};

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
