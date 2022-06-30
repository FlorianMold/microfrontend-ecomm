const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // Start a development server
  devServer: {
    port: 8081
  },
  plugins: [
    // This plugin takes care of injecting the JS bundle into the index.html page
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}