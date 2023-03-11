import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import path from 'path';
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
      lib: {
        entry: path.resolve(__dirname, 'src/index.js'),
        name: 'MyLib',
        fileName: (format) => `index.${format}.js`
      },
      rollupOptions: {
        //treeshake: false,
        //input: resolve(__dirname, 'src/index.js'),
        // output: {
        //   entryFileNames: '[name].js',
        //   assetFileNames: '[name].[ext]',
        // },
      },
    },
    publicDir: false
  })
}