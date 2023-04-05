import { ResolveOptions } from 'webpack';

export default function buildResolvers(): ResolveOptions {
  return {
    // files that can be used without extension
    extensions: ['.tsx', '.ts', '.js'],
  };
}
