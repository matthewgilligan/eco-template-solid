import { lazy } from 'solid-js';

export const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/Home')),
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/About')),
  },
  {
    path: '/works',
    component: lazy(() => import('./pages/Works')),
  },
];
