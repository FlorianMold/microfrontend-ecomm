
// Browser do not have access to import statements
import faker from 'faker';

let products = '';

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`
}

// Display the list of products
document.querySelector('#dev-products').innerHTML = products;