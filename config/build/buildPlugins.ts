import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance,
} from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export default function buildPlugins(
  path: string,
  isDev: boolean
): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: path,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    isDev ? new ReactRefreshWebpackPlugin() : null,
    isDev ? new HotModuleReplacementPlugin() : null,
  ].filter(Boolean);
}
