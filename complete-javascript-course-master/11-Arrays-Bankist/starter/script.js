'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements) {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;

}


const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`
};



const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
};
createUsernames(accounts);

const updateUI = function(acc) {
   // Display movements
   displayMovements(acc.movements);

   // Display balance
   calcDisplayBalance(acc);

   // Display summary
   calcDisplaySummary(acc);
}


//Event Handlers
let currentAccount; 

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault(); 

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
    
  } 
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if(amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount && 
    receiverAcc?.username !== currentAccount.username) {

      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      //update UI
      updateUI(currentAccount);

    }
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update the UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value = '';
});



btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  
    if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === 
    currentAccount.pin) {
      
      const index = accounts.findIndex(acc => acc.username === currentAccount.username);
      
      console.log(index);
      //Delete Account
      accounts.splice(index, 1);
      
      //Hide UI
      containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = '';
});














/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE Method - creates a shallow copy of array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// //SPLICE Method // mutates the original array
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);


// //REVERSE method // mutates the original array
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT method
// const letters = arr.concat(arr2);
// console.log(letters)
// console.log([...arr, ...arr2]);

// //JOIN method
// console.log(letters.join(' - '));




// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i+1}: You deposited! ${movement}`)
//   } else {
//     console.log(`Movement ${i+1}: You withdrew! ${Math.abs(movement)}`)
//   }
// }

// console.log('-----FOR EACH-----')
// movements.forEach((mov, i, arr) => {
//   if (mov > 0) {
//     console.log(`Movement ${i+1}: You deposited! ${mov}`)
//   } else {
//     console.log(`Movement ${i+1}: You withdrew! ${Math.abs(mov)}`)
//   }
// });
// //0 function(200)
// //1 function(450)
// //2 function(400)





// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'UDS', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach((value, _, map) => {
//   console.log(`${value}: ${value}`);
//   console.log(map)
// });





///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a 
puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if 
it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs 
actually have cats, not dogs! So create a shallow copy of Julia's array, 
and remove the cat ages from that copied array (because it's a bad practice 
to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult 
("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 
2 is still a puppy 🐶")

4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function(dogsJulia, dogsKate) {
//   const newJulia = dogsJulia.slice(1, 3);
//   const newArr = newJulia.concat(dogsKate);
//   newArr.forEach((val, key) => {
//     if(val >= 3) {
//     console.log(`Dog number ${key+1} is an adult and is ${val} years old`) 
//     } else {
//       console.log(`Dog number ${key+1} is a puppy and is ${val} years old`)
//     }
//   })
// }


// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])


//////////////////////
//MAP - returns a NEW ARRAY

// const euroToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const movementsUSD = movements.map(function(mov) {
// //   return mov * euroToUsd;
// // });

// const movementsUSD = movements.map(mov => mov * euroToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * euroToUsd)
// }
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i) => 
//     `Movement ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );

// console.log(movementsDescriptions);


// const user = 'Steven Thomas Williams'; // stw

// const createUsernames = function(accs) {
//   accs.forEach(function(acc) {
//     acc.username = acc.owner
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   })
// };

// createUsernames(accounts);
// console.log(accounts)



////////////////FILTER METHOD
// const deposits = movements.filter((mov) => {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);


// //same result
// const depositsFor = []
// for(const mov of movements) {
//   if(mov > 0) {
//     depositsFor.push(mov)
//   }
// }
// console.log(depositsFor)

// const withdrawals = movements.filter((mov) => {
//   return mov < 0;
// });

// console.log(withdrawals);



////////////////
//REDUCE

// const balance = movements.reduce((acc, cur) => acc + cur ,0);

// // const balance = movements.reduce((acc, cur, i, arr) => {
// //   console.log(`Iteration ${i}: ${acc}`)
// //   return acc + cur;
// // }, 0);
// console.log(balance);

// let balance2 = 0;
// for(const mov of movements) balance2 += mov;
// console.log(balance2)


// Maximum Value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov)
//     return acc;
//   else
//     return mov;
// }, movements[0]);
// console.log(max);


///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to 
convert dog ages to human ages and calculate the average age of the dogs in 
their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if 
the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years 
old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the 
  same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already 
  know from other challenges how we calculate averages 😉)

4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages.map((age) => {
//       return age <= 2 ? age * 2 : 16 + age * 4});
//       const adults = humanAges.filter((age) => {
//       return age >= 18});
//       const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    
//     return average;
// }

// // console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// const eurToUSD = 1.1;

// //PIPELINE
// const totalDepositsInUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUSD)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsInUSD);


// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages
//       .map(age => age <= 2 ? age * 2 : 16 + age * 4)
//       .filter(age => age >= 18)
//       .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//     return humanAges;
// }

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));


////////////////FIND METHOD
//Will return the first element that satisfies the condition //returns element, not entire array
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account);

// for (let acc of accounts) {
//   if (acc.owner === "Jessica Davis") {
//     console.log(acc);
//   }
// }

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]


// EQUALITY
console.log(movements.includes(-130));
console.log(movements);

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// EVERY
const everyDeposit = movements.every(mov => mov > 0);
console.log(everyDeposit);
console.log(account4.movements.every(mov => mov > 0));

// Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));





