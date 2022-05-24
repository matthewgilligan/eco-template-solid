import { children } from 'solid-js';

import styles from './Layout.module.css';

export default function Layout(props) {
  const c = children(() => props.children);
  return (
    <main>
      <div class={styles.wrap}>{c()}</div>
    </main>
  );
}
