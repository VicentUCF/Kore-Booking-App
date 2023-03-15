module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.tmp/jestCache',
  testPathIgnorePatterns: ['<rootDir>/src/apps/CourtsManager/frontend/'],
};
