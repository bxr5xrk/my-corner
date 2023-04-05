import { Configuration } from 'webpack-dev-server';

export default function BuildDevServer(port: number): Configuration {
  return {
    port,
    open: false,
  };
}