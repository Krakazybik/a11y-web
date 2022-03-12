import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AntiCorruption } from 'pages/anti-corruption';
import { Disabilities } from 'pages/disabilities';
import { Main } from 'pages/main';
import { Search } from 'pages/search';
import { Tickets } from 'pages/tickets';
import { Header } from 'widget/header';
import { Content } from 'shared/ui/content';
import { Footer } from 'widget/footer';
import './styles.scss';
import { Visitors } from '../pages/visitors';

const AppLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<Search />} />
            <Route path="/anti-corruption" element={<AntiCorruption />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/disabilities" element={<Disabilities />} />
            <Route path="/visitors" element={<Visitors />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
