'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
  
//   function printAge() {
//     let output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output)


//     if(birthYear > 1981 && birthYear < 1996) {
//       var millenial = true;
//       //Creating NEW variable with same name as outer scope's variable

//       const firstName = 'Steven';

//       //Reassigning outer scope's variable
//       output = 'NEW OUTPUT!'
      
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//     }

//     // console.log(str);
//     console.log(millenial);
//     // add(2,3);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge()



// console.log(this);

const calcAge = function (birthYear) {
  console.log( 2037 - birthYear);
  // console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  // console.log( 2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function() {
    console.log(this)
    console.log(2037 - this.year)
  }
}
jonas.calcAge();


const matilda = {
  year: 2017,
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

