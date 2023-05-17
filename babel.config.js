module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-parameter-decorator',
    'babel-plugin-transform-typescript-metadata',
    ["@babel/plugin-proposal-decorators", { legacy: true }],
  ],
};

