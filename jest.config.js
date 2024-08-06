module.exports = {
    // Transform files using babel-jest
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // This will handle .js and .jsx files
    },
    // Ignore transformations for specific modules
    transformIgnorePatterns: [
      '/node_modules/(?!(@testing-library|some-other-package)/)', // Example for specific packages
    ],
    // Test environment
    testEnvironment: 'jsdom', // Suitable for testing front-end code
    // Other configurations
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Path to setup files if needed
  };
  