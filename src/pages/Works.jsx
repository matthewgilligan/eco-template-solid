import { MetaProvider } from 'solid-meta';

import SEO from './../components/SEO';

export default function Works() {
  return (
    <MetaProvider>
      <SEO title='Works' />
      <h1>Works</h1>
    </MetaProvider>
  );
}
