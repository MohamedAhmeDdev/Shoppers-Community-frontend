module.exports = {
    transformIgnorePatterns: [
      "/node_modules/(?!(@testing-library)/)"
    ],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    }
  };
  