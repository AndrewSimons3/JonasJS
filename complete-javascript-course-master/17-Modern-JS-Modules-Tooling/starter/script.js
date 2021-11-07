 // Importing module
//  import { addToCart, tq, totalPrice as price } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
console.log('Importing module');

//  import * as ShoppingCart from './shoppingCart.js';
//  ShoppingCart.addToCart('bread', 5);
//  console.log(ShoppingCart.totalPrice);

 import add, {cart} from './shoppingCart.js';
 add('pizza', 2);
 add('bread', 5);
 add('apple', 4);

 console.log(cart);


 

