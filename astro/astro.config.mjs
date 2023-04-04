import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import sanity from 'astro-sanity'
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [image({ serviceEntryPoint: '@astrojs/image/sharp'}), react(), sanity({
    projectId: 'bxgogoyq',
    dataset: 'production',
    useCdn: true,
    apiVersion: 'v2023-03-01',
  })]
});
