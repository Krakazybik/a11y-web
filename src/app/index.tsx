import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from 'pages/main';
import { Search } from 'pages/search';
import { Header } from 'widget/header';
import { Content } from 'shared/ui/content';
import { Footer } from 'widget/footer';
import './styles.scss';

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
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
