import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

// Tells Fumadocs MDX where your content lives.
export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig();
