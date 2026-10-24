import { defineConfig } from 'astro/config';

// Maquette statique. Feuilles de style intégrées dans le HTML pour que
// chaque page s'ouvre aussi hors serveur (prévisualisation, partage).
export default defineConfig({
  output: 'static',
  build: { inlineStylesheets: 'always', format: 'file' },
  devToolbar: { enabled: false },
});
