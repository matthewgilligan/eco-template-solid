import { NavLink } from 'solid-app-router';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div class={styles.wrap}>
        <div class={styles.title}>
          <NavLink href='/'>
            <h1>ECO</h1>
          </NavLink>
        </div>

        <nav>
          <NavLink href='/about'>About</NavLink>
          <NavLink href='/works'>Works</NavLink>
        </nav>
      </div>
    </header>
  );
}
