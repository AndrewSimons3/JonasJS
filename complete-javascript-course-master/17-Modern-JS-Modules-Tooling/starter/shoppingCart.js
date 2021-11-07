// Exporting module
console.log('Exporting Module');

const shoppingCost = 10;
const cart = [];

export const addToCart = function(product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
}