

const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const paths = require('./paths');
require('./env');

module.exports = {
  mode: 'production',
  entry: [
    paths.appIndexJs,
  ],
  output: {
    path: paths.appBuildLib,
    filename: 'index.js',
    libraryTarget: 'commonjs',
    publicPath: process.env.LIB_CDN,
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules],
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          babelrc: false,
          plugins: [	
            'dynamic-import-node',	
          ],
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 1,
          name: 'images/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': process.env,
    }),
    new CaseSensitivePathsPlugin(),
  ],
  optimization: {
    namedModules: true,
  },
  performance: {
    hints: false,
  },
  externals: {
    '@ahaui/react': '@ahaui/react',
  }
};
