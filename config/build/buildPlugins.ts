import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, WebpackPluginInstance } from 'webpack';

export default function buildPlugins(path: string): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: path,
    }),
    new ProgressPlugin(),
  ];
}
