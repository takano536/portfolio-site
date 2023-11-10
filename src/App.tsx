import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import About from '@/pages/About';
import History from '@/pages/History';
import Products from '@/pages/Products';
import NotFound from '@/pages/NotFound';

const App: FC = () => (
  <Routes>
    <Route
      path="https://takano536.github.io/portfolio-site/"
      element={<Home />}
    />
    <Route
      path="https://takano536.github.io/portfolio-site/about"
      element={<About />}
    />
    <Route
      path="https://takano536.github.io/portfolio-site/history"
      element={<History />}
    />
    <Route
      path="https://takano536.github.io/portfolio-site/products"
      element={<Products />}
    />
    <Route
      path="https://takano536.github.io/portfolio-site/*"
      element={<NotFound />}
    />
  </Routes>
);

export default App;
