module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        project: './tsconfig.json',
    },
    globals: {
        DEVELOPMENT: true,
    },
    extends: [
        'plugin:react/recommended',
        ...[
            './configs/eslint/strict',
            './configs/eslint/compat',
            './configs/eslint/imports',
            './configs/eslint/es6',
            './configs/eslint/best-practices',
            './configs/eslint/errors',
            './configs/eslint/variables',
            './configs/eslint/style',
            './configs/eslint/react',
        ].map(require.resolve),
    ],
};
