import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
      name: 'library',
      manifest: true,
      filename: 'remoteEntry.js',
      exposes: {
        './collection': './src/modules/collection',
      },
      shared: {
        react: {
           singleton: true,
          },
      }
      }),
      cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (outputChunk) => outputChunk.fileName === 'remoteEntry.js'
    })
    ],
      test: {
    globals: true,
    environment: "jsdom",
    // reporters: ['html'],
  },
    build: {
    target: 'chrome89',
  },
})
