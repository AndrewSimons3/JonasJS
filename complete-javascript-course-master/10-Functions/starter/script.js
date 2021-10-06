'use strict';

// const bookings = []

// const createBooking = function(
//   flightNum, 
//   numPassengers = 1, 
//   price = 199 * numPassengers) {
  
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000)


const flight = 'LH234';
const andrew = {
  name: 'Andrew Simons',
  passport: 32543534
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 32543534) {
    alert('Check in')
  } else {
    alert('Wrong passport!')
  }
}

// checkIn(flight, andrew);
// console.log(flight);
// console.log(andrew);

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 100000000);
}

newPassport(andrew);
checkIn(flight, andrew);
