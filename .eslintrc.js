module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      files: ['.eslintrc.js', '.eslintrc.cjs'],
      parserOptions: {
        sourceType: 'script',
        ecmaFeatures: {
          jsx: true,
        },
      },
      env: {
        node: true,
      },
    },
  ],
  ignorePatterns: ['node_modules/**'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: ['error', 'always'],

    // Possible Errors
    'no-extra-semi': 'error',
    'no-inner-declarations': 'error',

    // Best Practices
    curly: 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-new-wrappers': 'error',
    'no-with': 'error',

    // Strict Mode
    // ...

    // Variables
    'no-undef': 'error',

    // Node.js
    // ...

    // Stylistic Issues
    'array-bracket-spacing': ['error', 'never'],
    'no-array-constructor': 'error',
    'no-trailing-spaces': 'error',
    'quote-props': ['error', 'as-needed'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'always'],
    'spaced-comment': 'error',

    // ECMAScript 6
    'arrow-parens': ['error', 'as-needed'],
    'generator-star-spacing': ['error', 'both'],
    'no-duplicate-imports': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',

    // React
    // ...
  },
}
