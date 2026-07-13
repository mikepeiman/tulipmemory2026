import { defineConfig } from 'astro/config';

// Static output — deploys to Vercel with zero config (no adapter needed).
// `site` is used for canonical URLs and the hand-written sitemap in /public.
export default defineConfig({
  output: 'static',
  site: 'https://tulipmemory.com'
});
