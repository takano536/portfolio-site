import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import About from '@/pages/About';
import History from '@/pages/History';
import Products from '@/pages/Products';
import NotFound from '@/pages/NotFound';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/history" element={<History />} />
    <Route path="/products" element={<Products />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

export default App;
