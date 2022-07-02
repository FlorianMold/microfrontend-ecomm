import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart.</div>`;

  // Render our cart-text into the div.
  el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');
  
  if(el) {
    mount (el);
  }
}

export { mount };