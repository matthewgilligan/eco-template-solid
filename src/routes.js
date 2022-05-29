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
    path: '/carbon-intensity',
    component: lazy(() => import('./pages/CarbonIntensity')),
  },
  {
    path: '/works',
    component: lazy(() => import('./pages/Works')),
  },
];
