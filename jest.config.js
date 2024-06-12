/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testMatch: [
    '<rootDir>/tests/**/*.test.ts'
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
};
