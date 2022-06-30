const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  // Start a development server
  devServer: {
    port: 8080
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js'
      }
    }),
    // This plugin takes care of injecting the JS bundle into the index.html page
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}