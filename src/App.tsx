import type { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import About from '@/pages/About';
import History from '@/pages/History';
import Products from '@/pages/Products';
import NotFound from '@/pages/NotFound';

const App: FC = () => (
  <BrowserRouter>
    <Route path="/portfolio-site/" element={<Home />} />
    <Route path="/portfolio-site/about" element={<About />} />
    <Route path="/portfolio-site/history" element={<History />} />
    <Route path="/portfolio-site/products" element={<Products />} />
    <Route path="/*" element={<NotFound />} />
  </BrowserRouter>
);

export default App;
