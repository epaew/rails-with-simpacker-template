module.exports = {
  moduleNameMapper: {
    '^#/(.+)': '<rootDir>/webpack/src/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/webpack/__tests__/**/*.[jt]s?(x)'],
};
