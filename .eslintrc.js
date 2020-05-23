module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    'react-hooks',
    '@typescript-eslint',
    'jsx-a11y',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'import/no-dynamic-require': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/label-has-for': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'global-require': 'off',
    'react-native/no-raw-text': 'off',
    camelcase: 'off',
    'import/extensions': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': ['error', { allow: ['tron'] }],
    'react/jsx-closing-bracket-location': 'off',
    'arrow-body-style': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
