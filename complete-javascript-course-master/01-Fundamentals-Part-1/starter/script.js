// Coding challenge 1

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);



//Coding challenge 2
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`)
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}`)
}


//Coding challenge 3

const dolphinsAvg = (96 + 108 + 89) / 3;
const koalasAvg = (88 + 91 + 110) / 3;

if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins win!")
} else if (dolphinsAvg === koalasAvg) {
  console.log("Draw!")
} else {
  console.log("Koalas win!")
}

//Bonus 1
if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("Dolphins win!")
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
  console.log("Draw")
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log("Koalas win!")
}




//Coding challenge 4



const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the bill + tip was ${bill + tip}`)




