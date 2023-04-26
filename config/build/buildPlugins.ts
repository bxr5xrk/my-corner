import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
  // HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance
} from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default function buildPlugins(
  path: string,
  isDev: boolean,
  analyze: 1 | 0
): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: path
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    analyze &&
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      }),
    isDev ? new ReactRefreshWebpackPlugin() : null
    // isDev ? new HotModuleReplacementPlugin() : null
  ].filter(Boolean);
}
