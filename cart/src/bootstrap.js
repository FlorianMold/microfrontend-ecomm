import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} items in your cart.</div>`;

// Render our cart-text into the div.
document.querySelector('#dev-cart').innerHTML = cartText;