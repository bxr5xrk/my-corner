import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

export default function buildLoaders(path: string): RuleSetRule[] {
  const assetsLoader = {
    test: /\.(png|jpe?g)/,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.css$/i,
    include: path,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  };

  return [svgLoader, assetsLoader, tsLoader, styleLoader];
}
