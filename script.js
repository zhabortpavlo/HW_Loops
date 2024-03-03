// TASK 1 //

let result = "(";
for (let i = 20; i <= 30; i += 0.5) {
  result += i;
  if (i < 30) {
    result += ",";
  }
}
result += ")";
console.log(result);

// TASK 2 //

let usdPrice = 27;
for (let i = 10; i <= 100; i += 10) {
  const grn = usdPrice * i;
  console.log(`${i} доларів коштує ${grn} гривень `);
}

// TASK 3 //

let num = 100;
let i = 1;

while (i ** 2 <= num) {
  console.log(i);
  i++;
}

// TASK 4 //

let number = 6;
let isSimple = true;

while (number % 2 === 0) {
    isSimple = false;
    break;
}

if (isSimple && number > 1) {
    console.log(`${number} є простим числом.`);
} else {
    console.log(`${number} не є простим числом.`);
}

// TASK 5 //

let number_1 = 81;
let result_1 = 1;
let power = 1;

while (result_1 < number_1 ) {
    result_1 = Math.pow(3,power);
    power++
}

if (result_1 === number_1) {
    console.log(`${number_1} можна отримати зведенням числа 3 у деякий степінь.`);
} else {
    console.log(`${number_1} не можна отримати зведенням числа 3 у деякий степінь.`);
}



