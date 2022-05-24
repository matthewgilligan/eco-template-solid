import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';

import './styles/index.css';
import App from './App';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('app')
);
