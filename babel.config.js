module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@lib': './src/lib',
          '@router': './src/router',
          '@screens': './src/screens',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
