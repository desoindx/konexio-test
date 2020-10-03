module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'default-case': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'windows'],
    'max-len': 'off',
    'no-param-reassign': ['error', {props: false}],
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'no-restricted-syntax': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts']
      }
    }
  },
};
