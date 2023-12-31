import type { FC } from 'react';

const Navbar: FC = () => (
  <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <a href="/portfolio-site/" className="btn btn-ghost normal-case text-xl">
        takano's portfolio site
      </a>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a href="/portfolio-site/about">About</a>
        </li>
        <li>
          <a href="/portfolio-site/history">History</a>
        </li>
        <li>
          <a href="/portfolio-site/products">Products</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
