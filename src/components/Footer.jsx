import { Link } from 'solid-app-router';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div class={styles.wrap}>
        <div class={styles.title}>
          <Link href='/'>
            <h1>ECO</h1>
          </Link>
        </div>
      </div>
    </footer>
  );
}
