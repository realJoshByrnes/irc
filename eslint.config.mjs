import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        // tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: ['packages/*/dist/**/*'],
  },
  eslintPluginPrettierRecommended
);
