const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new VanillaExtractPlugin()]
};

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  // config.plugins.push(new VanillaExtractPlugin());
  config.plugins.push(new MiniCssExtractPlugin());
  return config;
};
