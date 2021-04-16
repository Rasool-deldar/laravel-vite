module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // from https://github.com/nuxt/eslint-config/blob/master/index.js
    'import/no-unresolved': 0,
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', 'app',
        ],
      },
    ],
    'no-shadow': ['error', { allow: ['state', 'getters', 'commit', 'dispatch'] }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/comment-directive': 0,
    'max-len': [1, 150, 4],
  },
  settings: {
    'import/core-modules': [
      // for disable "'vue' should be listed in the project's dependencies" error
      'vue',
      'vuex',
    ],
  },
};
