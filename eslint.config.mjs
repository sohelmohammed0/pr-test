import js from '@eslint/js';

export default [
  js.configs.recommended,

  // Node environment
  {
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
      },
    },
  },

  // Jest environment (only for test files)
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        test: 'readonly',
        expect: 'readonly',
      },
    },
  },
];
