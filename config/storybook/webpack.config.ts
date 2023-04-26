import { BuildPaths } from '../build/types/config';
import path from 'path';
import { Configuration } from 'webpack';

module.exports = ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
