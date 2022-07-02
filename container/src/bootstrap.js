// We want to get access to the source code in this file

/**
 * When webpack builds the application, it sees the word product.
 * If webpack can't find the dependency inside our node-modules dependency
 * then it is going to take a look at the remotes section of the module-federation
 * plugin configuration.
 * 
 * It looks for matching keys. In this case it looks for products in the remotes-array.
 * 
 * 
 */
import 'products/ProductsIndex';

/**
 * How does this work?
 * 
 * Webpack sees the word cart and webpack looks into the remotes section in
 * the webpack.config.js. Webpack sees that it needs to load the remoteEntry.js
 * from the given url to get the code.
 * 
 * Inside the webpack.config.js of the cart the CartShow is exposed.
 * 
 * When we want to run the CartShow, we have to make sure, to have some dom-element, where to render this.
 */
import 'cart/CartShow';

console.log('Container');

