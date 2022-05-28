import { MetaProvider } from 'solid-meta';

import SEO from './../components/SEO';

export default function About() {
  return (
    <MetaProvider>
      <SEO title='About' />
      <h1>About</h1>
    </MetaProvider>
  );
}
