module.exports = {
  env: { browser: true, es2020: true, node: true },
  ignorePatterns: ["dist"],
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:perfectionist/recommended-natural",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "perfectionist",],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "perfectionist/sort-enums": "off",
    "perfectionist/sort-union-types": "off",
    "perfectionist/sort-objects": "off",
    "perfectionist/sort-object-types": "off",
    "perfectionist/sort-array-includes": [
      "warn",
      {
        order: "asc",
        "spread-last": true,
        type: "natural",
      },
    ],
    "perfectionist/sort-exports": [
      "warn",
      {
        order: "asc",
        type: "line-length",
      },
    ],
    "perfectionist/sort-imports": [
      "warn",
      {
        "newlines-between": "always",
        order: "asc",
        type: "line-length",
      },
    ],
    "perfectionist/sort-named-exports": [
      "warn",
      {
        order: "asc",
        type: "line-length",
      },
    ],
    "perfectionist/sort-named-imports": [
      "warn",
      {
        order: "asc",
        type: "line-length",
      },
    ],
    "perfectionist/sort-interfaces": [
      "warn",
      {
        order: "desc",
        type: "line-length",
      },
    ],
    "perfectionist/sort-jsx-props": [
      "warn",
      {
        "custom-groups": {
          control: "id",
          id: "id",
          key: "id",
          name: "id",
          rules: "id",
        },
        groups: ["id", "unknown"],
        order: "desc",
        type: "line-length",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
