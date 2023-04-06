import { Configuration } from 'webpack';
import BuildDevServer from './buildDevServer';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/config';

export default function buildWebpackConfig(
  options: BuildOptions
): Configuration {
  const { mode, paths, port, isDev } = options;
  const { entry, build, html, src } = paths;

  return {
    mode,

    entry,

    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true,
    },
    module: {
      rules: buildLoaders(src),
    },
    resolve: buildResolvers(src),
    plugins: buildPlugins(html),

    devServer: isDev ? BuildDevServer(port) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
  };
}
