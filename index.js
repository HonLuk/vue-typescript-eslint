module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    require.resolve("eslint-config-alloy/typescript.js"),
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended",
    require.resolve("eslint-config-prettier/@typescript-eslint.js"),
    require.resolve("@vue/eslint-config-typescript/index.js"),
  ],
  plugins: ["unused-imports"],
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/prefer-optional-chain": "off",
      },
    },
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "error",
      {
        jsxBracketSameLine: true,
        htmlWhitespaceSensitivity: "ignore",
        trailingComma: "none",
      },
    ],
    "no-useless-catch": "off",
    "no-unused-vars": "off",
    "no-implicit-coercion": "off",
    "no-empty": "off",
    "no-prototype-builtins": "off",
    "require-atomic-updates": "off",
    "vue/require-valid-default-prop": "off",
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/no-unused-vars": "off",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/no-var-requires": "off", //允许requires
    "@typescript-eslint/explicit-member-accessibility": "off", //类访问修饰符
    "@typescript-eslint/member-ordering": "off", //排序
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-this-alias": "off", //允许this赋值给变量
    "@typescript-eslint/method-signature-style": "off", //风格
    "@typescript-eslint/no-require-imports": "off", //允许require
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports-ts": "error",
    "unused-imports/no-unused-vars-ts": "off",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
