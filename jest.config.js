module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    testPathIgnorePatterns: ['/node_modules/', '/examples/', '/docs/'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { babel: true }],
        '^.+\\.jsx?$': 'babel-jest'
    }
};
