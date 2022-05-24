import { Link, NavLink } from 'solid-app-router';

import darkmode from './../utils/darkmode';

import './Header.css';

export default function Header() {
  return (
    <header>
      <div class='page-flex-wrap'>
        <div>
          <Link href='/'>
            <h1>ECO</h1>
          </Link>
        </div>

        <nav>
          <NavLink href='/about'>About</NavLink>
          <NavLink href='/works'>Works</NavLink>
        </nav>

        <button onClick={darkmode}>Turn blue</button>
      </div>
    </header>
  );
}
