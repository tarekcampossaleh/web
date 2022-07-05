module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/quotes": [2, "double", { avoidEscape: true }],
      "import/prefer-default-export": 0,
      "react/jsx-props-no-spreading": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/button-has-type": 0,
      "import/no-cycle": 0,
      "jsx-a11y/no-autofocus": 0,
      "react/no-array-index-key": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "no-template-curly-in-string": 0,
      "import/no-extraneous-dependencies": 0
    },
    ignorePatterns: ["/node_modules/**/*", "/build/**/*"],
  };