const path = require('path');

module.exports = {
  extends: ['airbnb'],
  env: {
    es6: true,
    browser: true,
  },
  globals: {
    __API__: false,
    __GRAFANA_URL__: false,
    __STATIC_URL__: false,
  },
  parser: 'babel-eslint',
  parserOptions: { ecmaFeatures: { legacyDecorators: true } },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'guard-for-in': 'off',
    'import/extensions': ['error', 'never', { json: 'always' }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'max-len': ['warn', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
    }],
    'new-cap': ['error', { capIsNew: false }],
    'no-continue': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true },
      ObjectPattern: { multiline: true },
      ImportDeclaration: { multiline: true },
      ExportDeclaration: { multiline: true },
    }],
    'react/destructuring-assignment': 'off',
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/sort-comp': [
      'error', {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
        ],
      },
    ],
    'react/static-property-placement': 'off',
  },
  settings: {
    'import/resolver': { [path.resolve(__dirname, 'node_modules/eslint-import-resolver-webpack')]: { config: path.join(__dirname, '/config/', 'webpack.base.js') } },
    createClass: 'createReactClass',
    pragma: 'React',
    version: '16.5',
  },
  plugins: [
    'react',
  ],
};
