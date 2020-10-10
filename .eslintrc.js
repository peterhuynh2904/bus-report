const packageJSON = require('./package.json');
const path = require('path');

const dependencies = packageJSON.dependencies;
const externalPackage = Object.keys(dependencies)
  .filter(key => !key.startsWith('@angular'))
  .join('|');
const externalPackageRegex = `^(${externalPackage})(.*|$)`;

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@angular-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['deprecation', 'jsdoc', 'prefer-arrow', '@typescript-eslint', '@typescript-eslint/tslint', 'simple-import-sort'],

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@shared', './src/app/shared'],
          ['@vendors', './src/vendors']
        ],
        extensions: ['.ts', '.js', '.json']
      },
      node: {
        moduleDirectory: ['node_modules', 'src/'],
        extensions: ['.ts', '.js', '.json']
      }
    }
  },
  rules: {
    '@typescript-eslint/array-type': 'off', // array-type
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit'
      }
    ], // member-access
    '@typescript-eslint/interface-name-prefix': 'off', // interface-name
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: ['static-field', 'instance-field', 'static-method', 'instance-method']
      }
    ], // member-ordering
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error', // no-non-null-assertion
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off', // no-var-requires
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ], // quotemark
    quotes: [2, 'single', 'avoid-escape'],
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'arrow-parens': ['off', 'as-needed'], // arrow-parens
    camelcase: ['error', { allow: ['__webpack_public_path__'] }],
    'comma-dangle': 'off', // trailing-comma
    complexity: 'off',
    'constructor-super': 'error',
    'deprecation/deprecation': 'off', // deprecation
    'dot-notation': 'off', // no-string-literal
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'id-blacklist': 'off',
    'id-match': 'error',
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          ['^@angular.*'],
          [externalPackageRegex],
          ['^@.*'],
          ['^\\.\\./\\.\\.'],
          ['^\\.\\./'],
          ['^\\./']
        ]
      }
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'sort-imports': 'off',
    'jsdoc/no-types': 'error', // no-redundant-jsdoc
    'max-classes-per-file': 'off', // max-classes-per-file
    'max-len': [
      'off',
      {
        code: 140
      }
    ], // max-line-length
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': [
      'error',
      {
        allow: ['debug', 'info', 'time', 'timeEnd', 'trace', 'error']
      }
    ], // no-console
    'no-debugger': 'error',
    'no-empty': 'off', // no-empty
    'no-eval': 'error',
    'no-fallthrough': 'error', // no-switch-case-fall-through
    'no-invalid-this': 'off',
    'no-multiple-empty-lines': 'error', // no-consecutive-blank-lines
    'no-new-wrappers': 'error',
    'no-restricted-imports': ['error', 'rxjs/Rx'], // import-blacklist
    'no-shadow': [
      'error',
      {
        hoist: 'all'
      }
    ],
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': ['error', { allow: ['__webpack_public_path__', '_eventName', '_pixelId', '_qevents'] }],
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow/prefer-arrow-functions': 'off',
    'quote-props': ['error', 'as-needed'], // object-literal-key-quotes
    radix: 'error',
    'spaced-comment': 'error',
    'sort-keys': 'off', // object-literal-sort-keys
    'use-isnan': 'error',
    'valid-typeof': 'off',
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rulesDirectory: ['codelyzer'],
        rules: {
          'component-selector': [true, 'element', 'app', 'kebab-case'],
          'directive-selector': [true, ['element', 'attribute'], 'app', 'camelCase'],
          'component-class-suffix': true, // component-class-suffix
          'directive-class-suffix': true, // directive-class-suffix
          'no-input-rename': true, // no-input-rename
          'no-output-on-prefix': true, // no-output-on-prefix
          'no-output-rename': true, // no-output-rename
          'use-life-cycle-interface': true, // use-life-cycle-interface
          'use-pipe-transform-interface': true // use-pipe-transform-interface
        }
      }
    ]
  }
};
