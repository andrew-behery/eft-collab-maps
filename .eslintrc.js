module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  plugins: ['prettier', 'jest', 'cypress'],
  env: {
    browser: true,
    'cypress/globals': true,
    es6: true,
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': 'warn',
  },
};
