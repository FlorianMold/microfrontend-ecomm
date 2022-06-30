const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  // Start a development server
  devServer: {
    port: 8081
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/index'
      }
    }),
    // This plugin takes care of injecting the JS bundle into the index.html page
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}