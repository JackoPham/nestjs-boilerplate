const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const tsconfigPathsToAlias = require('./tsconfig-path-to-webpack');

module.exports = {
  entry: ['webpack/hot/poll?100', './src/server.ts'],
  watch: true,
  node: {
    __dirname: true,
  },
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?100'],
    }),
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: tsconfigPathsToAlias(),
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js',
  },
};
