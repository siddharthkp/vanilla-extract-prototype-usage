const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpack: {
    plugins: {
      add: [new MiniCssExtractPlugin({ chunkFilename: '[name].css' })]
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.optimization.splitChunks = {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'primer',
            chunks: 'all'
          }
        }
      };

      return webpackConfig;
    }
  }
};
