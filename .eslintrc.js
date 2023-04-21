module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    indent: ['error', 2, { ignoredNodes: ['ConditionalExpression'] }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
    'semi-spacing': ['error', { before: false, after: true }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'no-whitespace-before-property': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    },
    prettier: {
      singleQuote: true,
      jsxSingleQuote: true
    }
  },
  ignorePatterns: [
    'postcss.config.js',
    'tailwind.config.js',
    'webpack.config.js',
    '.eslintrc.js'
  ]
};
