import { MetaProvider } from 'solid-meta';

import SEO from './../components/SEO';

export default function Home() {
  return (
    <MetaProvider>
      <SEO title='Home' />
      <h1>Home</h1>
    </MetaProvider>
  );
}
