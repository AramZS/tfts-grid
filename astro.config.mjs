// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    site: "https://thegrid.talesfromthesp.in",
    integrations: [mdx(), partytown(), sitemap(), preact()],
    adapter: vercel(),
    output: "server",
});