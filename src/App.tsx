import './i18n';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Page from './layout/Page/Page';
import PageProtected from './layout/Page/PageProtected';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import type { ReactElement } from 'react';

import './styles/global.scss';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<Page />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PageProtected redirectUri="/login" />}>
            <Route path="/about" element={<About />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
