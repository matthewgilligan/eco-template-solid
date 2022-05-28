import { createApp } from 'solid-utils';
import { MetaProvider } from 'solid-meta';

import { App } from './App';
import './styles/index.css';

createApp(App).use(MetaProvider).mount('#app');
