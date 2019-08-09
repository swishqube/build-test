import minify from 'rollup-plugin-babel-minify';
import path from 'path';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import scss from 'rollup-plugin-scss';
import { writeFileSync, mkdirSync } from 'fs';

const PRODUCTION = process.env.PROD === 'true';
const year = new Date().getFullYear()


// Configuration
const external = []
const globals = {}
const plugins = [
  babel({
    exclude: 'node_modules/**' // only transpile our source code
  }),
  scss({
    output: true,

    // Filename to write all styles to
    output: './build/css/test.css',
    output: (styles, styleNodes) => {
      console.log('writing styles...');
      mkdirSync('./build/css', {recursive:true});
      writeFileSync('build/css/test.css', ['banner', styles].join(''));
      console.log('done writing styles...');
    },
    failOnError: true
  })
];

// If production add minfify plugin
if (PRODUCTION) {
  plugins.push(minify());
}

const filePostFix = PRODUCTION ? '.min.js' : '.js';
// const externalId = path.resolve(__dirname, '../src/index.js');

let exportConfig = [{
  input: path.resolve(__dirname, './src/index.js'),
  output: {
    file: path.resolve(__dirname, `./build/js/test${filePostFix}`),
    format: 'umd',
    name: 'TestComp',
    globals,
    banner: 'strBanner',
  },
  external,
  plugins
}];

export default exportConfig