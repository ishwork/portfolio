import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Include Next.js recommended configs
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Add Prettier integration
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // Show Prettier issues as ESLint errors
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 80,
          tabWidth: 2,
          endOfLine: 'lf',
        },
      ],
      'no-console': ['error', { allow: ['error'] }],
    },
  },

  // Disable ESLint rules that conflict with Prettier
  prettierConfig,

  //  build and generated files
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
];

export default eslintConfig;
