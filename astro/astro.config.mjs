import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import sanity from 'astro-sanity'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sanity({
    projectId: 'bxgogoyq',
    dataset: 'production',
    useCdn: true,
    apiVersion: 'v2023-03-01',
  })]
});
