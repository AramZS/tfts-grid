// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), partytown()],
  adapter: vercel()
});