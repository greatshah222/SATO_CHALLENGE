import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import flow from 'rollup-plugin-flow';
import fs from 'fs';
import image from '@rollup/plugin-image';

const files = fs.readdirSync('src/components').reduce((obj, folder) => {
  obj[folder] = `src/components/${folder}/index.js`;
  return obj;
}, {});

const icons = fs.readdirSync('src/icons').reduce((obj, file) => {
  if (file !== 'stories') {
    obj[file] = `src/icons/${file}`;
  }
  return obj;
}, {});

const noiseImages = fs.readdirSync('static/noises').reduce((obj, file) => {
  obj[file] = `static/noises/${file}`;
  return obj;
}, {});

const plugins = [
  external(),
  postcss({
    modules: true,
  }),
  url(),
  svgr(),
  babel({
    exclude: 'node_modules/**',
    plugins: ['external-helpers'],
  }),
  resolve(),
  commonjs(),
  flow(),
];

export default [
  {
    input: {
      ...noiseImages,
    },
    output: {
      dir: 'images',
      format: 'cjs',
      entryFileNames: '[name].js',
    },
    plugins: [image()],
  },
  {
    input: {
      ...files,
      theme: 'src/theme/index.js',
      tokens: 'src/.generated/styles.js',
      animationTemplates: 'src/animationTemplates/index.js',
    },
    output: [
      {
        dir: 'core',
        format: 'cjs',
        sourcemap: true,
        entryFileNames: '[name].js',
      },
    ],
    plugins,
  },
  {
    input: {
      ...icons,
    },
    output: [
      {
        dir: 'icons',
        format: 'cjs',
        sourcemap: true,
        entryFileNames: '[name]',
      },
    ],
    plugins,
  },
];
