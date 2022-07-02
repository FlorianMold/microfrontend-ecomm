// Browser do not have access to import statements
import faker from 'faker';

/**
 * The mount fn takes a HTMLElement and renders the logic of the products into it.
 * 
 * @param {*} el The HTMLElement, where the app gets rendered into.
 */
const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
  }

  // Display the list of products
  el.innerHTML = products;
}

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which definitely has an element with an id of 'dev-products'
// !We want to immeditaly render our app into that element.

// The env variable gets set, because we run webpack in development mode.
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  
  // Assuming our container doesn't have an element
  // with id 'dev-products'
  if(el) {
    // We probably running in isolation
    mount(el);
  }
}


// Context/Situation #2
// We are running this file in development or production
// through the container app
// No GURANTEE that an element with an id of 'dev-products'
// !We do not want to immediately render our app into that element, because the element might not exist.

/**
 * By exporting the mount function, our container can import the mount function and decide where to render it.
 */
export { mount };