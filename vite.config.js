import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

export default () => {
  return defineConfig({
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              'last 2 versions',
            ],
          }),
        ],
      }
    },
    build: {
      rollupOptions: {
        input: resolve(__dirname, 'src/index.js'),
        output: {
          assetFileNames: '[name].[ext]',
        },
      },
    },
    publicDir: false
  })
}