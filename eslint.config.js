import globals from 'globals';
import * as tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

const rules = {
  '@typescript-eslint/no-explicit-any': 'off',
  'no-useless-constructor': 'off',
  'indent': ['error', 2],
  'linebreak-style': ['error', 'unix'],
  'quotes': ['error', 'single'],
  'semi': ['error', 'always'],
  'react/react-in-jsx-scope': 'off',
  'comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'always-multiline',
  }],
};

export default [
  {
    files: ['*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules,
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tseslint.plugin,
    },
    rules,
  },
];
