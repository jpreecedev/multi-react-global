/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default {
  mode: 'production',
  entry: {
    main: resolve('./src/index.js')
  },
  output: {
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
  resolve: {
    extensions: ['.js']
  },
  plugins: [new CleanWebpackPlugin(['dist'])]
}
