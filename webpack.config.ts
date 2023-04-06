import { BuildPaths, BuildMode } from './config/build/types/config';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
require('dotenv').config();

export default () => {
  const paths: BuildPaths = {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    html: resolve(__dirname, 'public', 'index.html'),
    build: resolve(__dirname, 'dist'),
    src: resolve(__dirname, 'src'),
  };

  const mode = (process.env.NODE_ENV as BuildMode) ?? 'development';
  const PORT = Number(process.env.PORT) ?? 3000;

  const isDev = mode === 'development';

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
