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
      /**
       * The name is not going to be used inside host-module.
       * The container is a host, it is trying to use code from other remotes.
       * A remote is someting, that wants to share code.
       * 
       * The name property is not used inside the container normally, it is 
       * convention to write it.
       */
      name: 'container',
      /**
       * The remotes controls, how webpack is loading the remoteEntry.js file
       */
      remotes: {
        /**
         * Where the find the remoteEntry file to get access to the source-code.
         * 
         * The `products@` refers to the `name`-property inside the webpack
         * configuration of the products-project.
         */
        products: 'products@http://localhost:8081/remoteEntry.js',
        cart: 'cart@http://localhost:8082/remoteEntry.js',
      }
    }),
    // This plugin takes care of injecting the JS bundle into the index.html page
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}