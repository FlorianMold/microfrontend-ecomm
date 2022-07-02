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
      /** 
       * The name `products` has to be identical to the string `products` inside the
       * webpack configuration of the container
       * Nothing works, if the two names are not identical.
       */
      name: 'products',
      /**
       * This controls the name of the remoteEntry.js
       * There is no good reason to change this from the default.
       */
      filename: 'remoteEntry.js',
      /**
       * Exposes defines, what modules/files should be exposed to the outside world.
       * We can choose, if we want to export only one module in products or single files
       */
      exposes: {
        /**
         * Here we expose a module called `ProductsIndex` and if someone imports the module
         * we return the src/bootstrap file.
         * 
         * We alias the src/bootstrap.js as ProductsIndex.
         */
        './ProductsIndex': './src/bootstrap'
      },
      shared: ['faker']
    }),
    // This plugin takes care of injecting the JS bundle into the index.html page
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}