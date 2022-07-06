module.exports = {
  coverageDirectory: 'coverage',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test|tests).[tj]s?(x)'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.out/', '/public/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    '^~/(.*)$': '<rootDir>/src/$1'
  }
}
