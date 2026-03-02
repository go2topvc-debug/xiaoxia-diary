// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://go2topvc-debug.github.io',
	base: '/xiaoxia-diary',
	trailingSlash: 'always',
	integrations: [mdx(), sitemap()],
});
