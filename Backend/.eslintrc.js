module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        camelcase: 'on',
        'import/first': 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
        'consistent-return': 'off',
    },
};
