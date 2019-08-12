import minify from 'rollup-plugin-babel-minify';
import path from 'path';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import { writeFileSync, mkdirSync } from 'fs';

const PRODUCTION = process.env.PROD === 'true';
const year = new Date().getFullYear()


// Configuration
const external = []
const globals = {}
const plugins = [
  babel({
    exclude: 'node_modules/**' // only transpile our source code
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
    file: path.resolve(__dirname, `./build/js/icecomp${filePostFix}`),
    format: 'umd',
    name: 'TestComp',
    globals,
    banner: 'Test',
  },
  external,
  plugins
}];

export default exportConfig
