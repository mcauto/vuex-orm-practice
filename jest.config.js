const path = require("path");

module.exports = {
  verbose: true,
  rootDir: path.resolve(__dirname, ""),
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~/(.*)$": "<rootDir>/src/$1"
  },
  moduleFileExtensions: ["js", "vue", "json"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/**/*.(vue|js)",
    "!**/node_modules/**",
    "!**/dist/**",
    "!.*.js",
    "!*.config.js",
    "!**/coverage/**"
  ],
  forceExit: !!process.env.CI // almost every CI platform sets this by default
};
