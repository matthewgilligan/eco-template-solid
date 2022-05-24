import { lazy } from 'solid-js';
import { Routes, Route } from 'solid-app-router';

import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Works = lazy(() => import('./pages/Works'));

function App() {
  return (
    <div class='App'>
      <div className='content'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/works' element={<Works />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
