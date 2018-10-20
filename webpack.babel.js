/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack'
import { resolve } from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default {
  mode: 'development',
  devtool: 'sourcemap',
  entry: {
    main: resolve('./index.js')
  },
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({
      React: 'React',
      react: 'React',
      'window.react': 'React',
      'window.React': 'React'
    })
  ]
}
