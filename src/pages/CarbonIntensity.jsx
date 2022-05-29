import { MetaProvider } from 'solid-meta';

import SEO from './../components/SEO';
import { useCarbonIntensity } from './../context/carbonIntensity';

export default function CarbonIntensity() {
  const [carbonIntensity, setCarbonIntensity] = useCarbonIntensity();

  return (
    <MetaProvider>
      <SEO title='Carbon Intensity' />
      <h1>Carbon Intensity</h1>
      <p>Carbon Intensity: {carbonIntensity().index}</p>
      <p>Carbon Forecast: {carbonIntensity().forecast}g CO2/kWh</p>
    </MetaProvider>
  );
}
