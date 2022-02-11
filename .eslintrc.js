module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended'
  ],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'script',
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: { mocha: true },
    },
  ],
};
