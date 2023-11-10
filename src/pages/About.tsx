import type { FC } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About: FC = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">About</h1>
            <p className="py-6">
              このサイトは takano のポートフォリオサイトです。
            </p>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <ul className="card-body flex flex-col gap-2 text-left font-raleway">
                  <div className="card-title md:text-xl text-lg font-raleway font-semibold">
                    Tech stacks used
                  </div>
                  <li className="flex gap-2 md:text-base text-sm">
                    Framework |{' '}
                    <a
                      className="link text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                      href="https://ja.vitejs.dev/"
                      target={'_blank'}
                      rel="noopener noreferrer"
                    >
                      Vite
                    </a>
                  </li>
                  <li className="flex gap-2 md:text-base text-sm">
                    CSS component |{' '}
                    <a
                      className="link text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                      href="https://daisyui.com/"
                      target={'_blank'}
                      rel="noopener noreferrer"
                    >
                      daisyUI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default About;
