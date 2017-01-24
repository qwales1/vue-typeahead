var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/vue-typeahead.common.js'
  },
  externals : {
    vue: {
      vue: {
        root: 'vue',
        commonjs2: 'vue',
        commonjs: 'vue',
        amd: 'vue'
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}
