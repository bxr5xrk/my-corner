import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

export default function buildLoaders(path: string): RuleSetRule[] {
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

  return [tsLoader, styleLoader];
}
