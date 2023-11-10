import type { FC } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound: FC = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1485847791529-09ed2263da0b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-9xl font-bold">404</h1>
            <p className="mb-5 text-3xl">Oops! That page can't be found.</p>
            <a href="/" role="button" className="btn btn-primary ">
              BACK TO HOME
            </a>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default NotFound;
