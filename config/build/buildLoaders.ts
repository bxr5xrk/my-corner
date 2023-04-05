import { RuleSetRule } from 'webpack';

// loaders - using to process files with different extensions
export default function buildLoaders(path: string): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/, // without this
  };

  const styleLoader = {
    test: /\.css$/i,
    include: path,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  };

  return [tsLoader, styleLoader];
}
