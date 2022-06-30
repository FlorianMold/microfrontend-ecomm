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

console.log('Container');

