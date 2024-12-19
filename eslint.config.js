// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    // Ignore all JS files so it will not conflict with existing code, this also
    // means no new JS file will be linted, unless we explicity add them in our
    // config.
    ignores: ['**/*.{js,mjs,cjs,d.ts}'],
  },
  {
    name: 'MICE/base',
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      // Enables rules ESLint recommends to use:
      // @see https://eslint.org/docs/latest/rules/
      eslint.configs.recommended,
      // Enables recommended rules for TS:
      // @see https://typescript-eslint.io/rules/
      ...tseslint.configs.recommended,
    ],
    // Only lint on TS files
    files: ['**/*.{ts,jsx,tsx}'],
    rules: {
      // Turned off because it doesn't allow structures like  `onChange && onChange();`
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      // Enforce "===", but not when it could be useful to use "==" over "===":
      eqeqeq: ['error', 'smart'],
      // Turn off ESLint "no-unused-vars" rule in favor of the TSESLint rule:
      'no-unused-vars': 'off',
      // Only allow unused vars when prefixed with an underscore:
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      // Turn off "react-in-jsx-scope" because it's automatically added by React
      'react/react-in-jsx-scope': 'off',
      // Turn off "prop-types" rule, because it doesn't seem to work well with forwardRef
      'react/prop-types': 'off',
      // Sometimes we specifically want NOT to add something to the dependencies array
      // Can be useful to turn on once in a while (or in development) to check dependencies array
      'react-hooks/exhaustive-deps': 'off',
    },
  },
  // Prevent collisions with Prettier. Leave this as the last config, so it overrides
  // all other configs!
  eslintConfigPrettier,
);
