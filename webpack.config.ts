import { BuildPaths, BuildEnv } from './config/build/types/config';
import { resolve } from 'path';
import webpack from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    html: resolve(__dirname, 'public', 'index.html'),
    build: resolve(__dirname, 'dist'),
    src: resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
