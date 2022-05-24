import { Link, NavLink } from 'solid-app-router';

import { ToggleClass } from '../utils/accessibility';

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

        <button onClick={() => ToggleClass('darkmode')}>Toggle Darkmode</button>
        <button onClick={() => ToggleClass('high-contrast')}>
          Toggle High Contrast
        </button>
        <button onClick={() => ToggleClass('grayscale')}>
          Toggle Grayscale
        </button>
      </div>
    </header>
  );
}
