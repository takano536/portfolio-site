import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import About from '@/pages/About';
import History from '@/pages/History';
import Products from '@/pages/Products';
import NotFound from '@/pages/NotFound';

const App: FC = () => (
  <Routes>
    <Route path="/portfolio-site/" element={<Home />} />
    <Route path="/portfolio-site/about" element={<About />} />
    <Route path="/portfolio-site/history" element={<History />} />
    <Route path="/portfolio-site/products" element={<Products />} />
    <Route path="/portfolio-site/*" element={<NotFound />} />
  </Routes>
);

export default App;
