import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  clearMocks: true,
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  rootDir: '../../',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.[tj]s?(x)?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>config/jest/transformers/svg.js'
  },
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  modulePaths: ['<rootDir>src']
};

export default config;
