import js from "@eslint/js/src/index.js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import storybookPlugin from "eslint-plugin-storybook";
import globals from "globals";

export default tseslint.config(
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "build/",
      ".storybook/",
      "next-env.d.ts",
      "eslint.config.js",
    ],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "react/react-in-jsx-scope": "off",
    },
  },

  ...storybookPlugin.configs["flat/recommended"],

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {},
  }
);
