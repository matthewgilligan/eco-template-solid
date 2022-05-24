import { Link, NavLink } from 'solid-app-router';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div class={styles.wrap}>
        <div class={styles.title}>
          <Link href='/'>
            <h1>ECO</h1>
          </Link>
        </div>

        <nav>
          <NavLink href='/about'>About</NavLink>
          <NavLink href='/works'>Works</NavLink>
        </nav>
      </div>
    </header>
  );
}
