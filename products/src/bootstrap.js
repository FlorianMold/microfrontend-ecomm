// Browser do not have access to import statements
import faker from 'faker';

let products = '';

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`
}

// Display the list of products
document.querySelector('#dev-products').innerHTML = products;

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which definitely has an element with an id of 'dev-products'
// !We want to immeditaly render our app into that element.

// Context/Situation #2
// We are running this file in development or production
// through the container app
// No GURANTEE that an element with an id of 'dev-products'
// !We do not want to immediately render our app into that element, because the element might not exist.