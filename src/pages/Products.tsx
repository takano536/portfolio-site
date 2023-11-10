import type { FC } from 'react';

import Navbar from '@/components/Navbar';

const Products: FC = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <div className="hero min-h-screen bg-base-200">
        <iframe
          width="800px"
          height="700px"
          src="https://replit.com/@takano536/ice-maze?lite=true&v=1"
        ></iframe>
      </div>
    </main>
  </>
);

export default Products;
