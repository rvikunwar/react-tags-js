

/** @type {import('jest').Config} */
const config = {
    verbose: false,
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testMatch: ['**/__tests__/*.(ts|tsx|js)'],
    moduleNameMapper: {
        '\\.(sa|sc|c)ss$': '<rootDir>/__tests__/__mocks__/styleMock.ts',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],

};

module.exports = config;