import globals from 'globals';
import pluginJs from '@eslint/js';

root: true;

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    ignores: ['**/node_modules/', '.git/'],
  },
  pluginJs.configs.recommended,
];
