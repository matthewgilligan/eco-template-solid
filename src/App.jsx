import { createResource, createEffect } from 'solid-js';
import { useRoutes, Router } from 'solid-app-router';

import Header from './components/Header';
import Footer from './components/Footer';
import { useCarbonIntensity } from './context/carbonIntensity';
import { fetchCarbonIntensity } from './utils/carbonIntensity';

import { routes } from './routes';

export const App = () => {
  const Routes = useRoutes(routes);
  const [carbonIntensity, setCarbonIntensity] = useCarbonIntensity();
  const [fetchedCarbonIntensity] = createResource(fetchCarbonIntensity);

  createEffect(() => {
    if (!fetchedCarbonIntensity.loading) {
      setCarbonIntensity(fetchedCarbonIntensity().data.data[0].intensity);
    }
  });

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
