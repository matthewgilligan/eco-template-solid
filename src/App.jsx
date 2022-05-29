import { useRoutes, Router } from 'solid-app-router';

import Header from './components/Header';
import Footer from './components/Footer';
import { useCarbonIntensity } from './context/carbonIntensity';

import { routes } from './routes';

export const App = () => {
  const Routes = useRoutes(routes);

  return (
    <Router>
      <div class='App'>
        <Header />

        <main className='page-wrap'>
          <Routes />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
