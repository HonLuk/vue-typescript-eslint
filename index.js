module.exports = {
  extends: [
    "eslint-config-alloy/typescript",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "prettier/@typescript-eslint",
    "@vue/typescript"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "error",
      { jsxBracketSameLine: true, htmlWhitespaceSensitivity: "ignore" }
    ]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};