module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "prettier",
    "eslint:recommended",
    "plugin:jest/recommended"
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "comma-dangle": ["error", "never"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
