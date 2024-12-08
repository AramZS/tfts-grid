// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://grid.talesfromthesp.in",
	integrations: [mdx(), partytown(), sitemap()],
	adapter: vercel(),
	output: "server",
});
