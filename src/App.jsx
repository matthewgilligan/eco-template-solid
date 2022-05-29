import { createResource } from 'solid-js';
import { useRoutes, Router } from 'solid-app-router';

import Header from './components/Header';
import Footer from './components/Footer';
import { fetchCarbonIntensity } from './utils/carbonIntensity';

import { routes } from './routes';

export const App = () => {
  const Routes = useRoutes(routes);
  const [fetchedCarbonIntensity] = createResource(fetchCarbonIntensity);

  return (
    <Router>
      <div class='App'>
        <Header />

        <Switch fallback={<p>{x()} is between 5 and 10</p>}>
          <Match when={fetchedCarbonIntensity.loading}>
            <p>Lodaing</p>
          </Match>
          <Match when={fetchedCarbonIntensity.error}>
            <p class='relative text-red-600'>{quote.error.message}</p>
          </Match>
          <Match when={fetchedCarbonIntensity()}>
            <p class='relative'>
              {fetchedCarbonIntensity().data.data[0].intensity.index}
            </p>
          </Match>
        </Switch>

        <main className='page-wrap'>
          <Routes />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
