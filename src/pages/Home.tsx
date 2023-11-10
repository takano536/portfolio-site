import type { FC } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home: FC = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="public/attakai-nokogiri-512.png"
            className="max-w-sm rounded-3xl shadow-2xl bg-base-100"
          />
          <div>
            <h1 className="text-5xl font-bold">Hi! I'm takano😇</h1>
            <p className="py-6">エンジニアを目指して勉強中の大学院生です。</p>
            <a
              href="/portfolio-site/#about"
              role="button"
              className="btn btn-primary "
            >
              ABOUT
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

export default Home;
