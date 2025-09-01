// eslint.config.mts
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';
import { FlatCompat } from '@eslint/eslintrc';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettier from 'eslint-plugin-prettier';
import nextPlugin from '@next/eslint-plugin-next';
import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

type PartialSome<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

const GLOBALS_BROWSER_FIX: PartialSome<typeof globals.browser, 'AudioWorkletGlobalScope '> = Object.assign({}, globals.browser, {
  AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope ']
});

delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope '];

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  js.configs.recommended,
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
  ),
  {
    ignores: ['.next', '.eslintrc.js', '*.config.js', '*.config.mjs', 'src/prisma/generated/*'],
  },
  prettierConfig,
  {
    files: ['./src/**/*.ts', './src/**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
       globals: {
        ...globals.node,
        ...GLOBALS_BROWSER_FIX,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      perfectionist,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      prettier,
      next: nextPlugin,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off', // Disable the base rule
      'unused-imports/no-unused-imports': 'error', // Use this instead
      'unused-imports/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      // Imports & sorting
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      // Prettier
      'prettier/prettier': 'warn',
      // Next.js / React rules
      'import/no-anonymous-default-export': 'off',
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'jsx-quotes': ['error', 'prefer-single'],
      // General
      'no-console': 'warn',
    },
  },
];
export default config;