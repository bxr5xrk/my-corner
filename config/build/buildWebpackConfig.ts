import { Configuration } from 'webpack';
import BuildDevServer from './buildDevDerver';
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
    // production (minified) or development
    mode,
    // start file (main)
    entry,
    // build path
    output: {
      filename: '[name].[contenthash].js', // [name] - dynamic name, [contenthash] - hash to generate unique file
      path: build,
      clean: true, // delete files from previous build
    },
    module: {
      rules: buildLoaders(src),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(html),

    devServer: isDev ? BuildDevServer(port) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined, // debug
  };
}
