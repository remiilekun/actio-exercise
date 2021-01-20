module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', 'prettier/react'],
  plugins: ['import', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 9,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: [
        ['@assets', './src/assets'],
        ['@components', './src/components'],
        ['@hooks', './src/hooks'],
        ['@lib', './src/lib'],
        ['@router', './src/router'],
        ['@screens', './src/screens'],
        ['@theme', './src/theme'],
      ],
    },
  },
  rules: {
    'no-duplicate-imports': 'error',
  },
};
