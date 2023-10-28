import type { FC } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound: FC = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main></main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default NotFound;
