import { lazy } from 'solid-js';
import { Routes, Route } from 'solid-app-router';

import Header from './components/Header';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Works = lazy(() => import('./pages/Works'));

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;
