import { Link } from 'solid-app-router';

import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div class='page-wrap'>
        <div>
          <Link href='/'>
            <h1>ECO</h1>
          </Link>
        </div>
      </div>
    </footer>
  );
}
