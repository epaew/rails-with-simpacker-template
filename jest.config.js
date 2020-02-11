module.exports = {
  moduleNameMapper: {
    '^#/(.+)': '<rootDir>/app/javascript/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/spec/javascript/**/*.test.ts'],
};
