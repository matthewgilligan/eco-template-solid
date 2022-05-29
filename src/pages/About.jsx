import { MetaProvider } from 'solid-meta';

import SEO from './../components/SEO';
import { useCarbonIntensity } from './../context/carbonIntensity';

export default function About() {
  const [carbonIntensity, setCarbonIntensity] = useCarbonIntensity();

  return (
    <MetaProvider>
      <SEO title='About' />
      <h1>About</h1>
      <h3>{carbonIntensity().forecast}</h3>
    </MetaProvider>
  );
}
