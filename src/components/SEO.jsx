import { mergeProps } from 'solid-js';
import { Title, Link, Meta } from 'solid-meta';

export default function SEO(props) {
  const merged = mergeProps({ title: 'Eco Template' }, props);

  console.log(merged);

  return (
    <>
      <Title>{merged.title}</Title>
    </>
  );
}
