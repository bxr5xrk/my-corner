import { ResolveOptions } from 'webpack';

export default function buildResolvers(path: string): ResolveOptions {
  return {
    preferAbsolute: true,
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
