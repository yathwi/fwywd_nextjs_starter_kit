import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';
import testingLibrary from 'eslint-plugin-testing-library';

// Next.js 16 で `next lint` が廃止され、ESLint 9 もフラット設定必須になったため、
// 従来の .eslintrc から移植した設定。ルールの中身は元の .eslintrc と同じ。
export default [
  { ignores: ['.next/**', 'node_modules/**', 'generator/**'] },

  // eslint-config-next 16 は 'next' / 'next/typescript' / core-web-vitals を含む配列
  // import プラグインは eslint-config-next 側で登録済みのため、ここでは再登録しない
  ...next,
  testingLibrary.configs['flat/react'],
  prettier,

  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: { project: './tsconfig.json' },
    },
    settings: {
      'import/resolver': {
        typescript: { project: './tsconfig.json' },
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
      'func-style': ['error', 'expression'],
      'arrow-body-style': ['error', 'as-needed'],
      'import/no-default-export': 'error',

      // @typescript-eslint
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: ['typeAlias', 'typeParameter', 'interface'], format: ['PascalCase'] },
        { selector: ['property', 'method'], format: ['camelCase'] },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should'],
          filter: { regex: '^_', match: false },
        },
      ],
    },
  },

  {
    files: ['src/pages/**/*.tsx'],
    rules: { 'import/no-default-export': 'off' },
  },
];
