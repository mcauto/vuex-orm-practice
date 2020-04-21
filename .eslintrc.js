module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
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
    "comma-dangle": ["error", "never"],
    "no-console": ["error", { allow: ["warn", "error"] }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
