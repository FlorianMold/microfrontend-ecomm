const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        /** What is exposed here can be imported in another webpack.config.js file */
        './CartShow': './src/index'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}