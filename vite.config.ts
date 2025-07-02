import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
      name: 'library',
      manifest: true,
      filename: 'remoteEntry.js',
      // remotes: {
      //   esm_remote: {
      //     type: "module",
      //     name: "esm_remote",
      //     entry: "https://[/remoteEntry.js",
      //   },
      //   var_remote: "var_remote@https://[...]/remoteEntry.js",
      // },
      exposes: {
        './collection': './src/components/Collection',
      },
      shared: {
        react: {
           singleton: true,
          },
      }
      })
    ],
    build: {
    target: 'chrome89',
  },
})
