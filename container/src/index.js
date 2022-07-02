// TODO(FM): This is an import-function call
import('./bootstrap');

// What is this index.js file all about.

// The index.js is needed to give webpack the opportunity
// to realize that before executing the bootstrap.js file
// that some code needs to be fetched beforehand, before something
// runs.

// It ensures that the products-project code is ready, before we do
// something with it.

// When we execute, the bootstrap.js file the expection is
// that the code of the products-project is ready and all the dependencies
// it requires.

// If we run the bootstrap.js directly, the code is not ready at this time.


// We give webpack the opportunity to fetch the dependencies of products, before
// executing the code of bootstrap.js