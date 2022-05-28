import { Link, NavLink } from 'solid-app-router';

import {
  ToggleBodyClass,
  AdjustFontSize,
  ResetFontSize,
} from '../utils/accessibility';

import './Header.css';

export default function Header() {
  return (
    <header>
      <div class='page-flex-wrap'>
        <div class='header-title'>
          <Link href='/'>
            <h1>ECO</h1>
          </Link>
        </div>

        <nav>
          <NavLink href='/about'>About</NavLink>
          <NavLink href='/works'>Works</NavLink>
        </nav>

        <div class='dropdown'>
          <button class='dropbtn'>Accessibility Controls</button>
          <div class='dropdown-content'>
            <button onClick={() => ToggleBodyClass('darkmode')}>
              Toggle Darkmode
            </button>
            <button onClick={() => ToggleBodyClass('high-contrast')}>
              Toggle High Contrast
            </button>
            <button onClick={() => ToggleBodyClass('grayscale')}>
              Toggle Grayscale
            </button>
            <button onClick={() => AdjustFontSize('add')}>
              Increase Font Size
            </button>
            <button onClick={() => AdjustFontSize('subtract')}>
              Decrease Font Size
            </button>
            <button onClick={() => ResetFontSize()}>Reset Font Size</button>
          </div>
        </div>
      </div>
    </header>
  );
}
