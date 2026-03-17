const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }] // Nome completo do preset
          ]
        }
      },
      resolve: {
        fullySpecified: false // Isso ajuda o Webpack a não ser tão chato com extensões
      }
    }]
  },
  devtool: 'source-map'
};