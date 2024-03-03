module.exports = {
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
};
