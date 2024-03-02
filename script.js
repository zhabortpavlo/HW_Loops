// TASK 1 //

let result = "(";
for (let i = 20; i <= 30; i += 0.5) {
  result += i.toFixed(1);
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

let num = 90;
let i = 1;

while (i ** 2 <= num) {
  console.log(i);
  i++;
}

// TASK 4 //

let number = 5;
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

let number_1 = 242;
let result_1 = 1;

while (result_1 < number_1 ) {
    result_1 *= 3
}

if (result_1 === number_1) {
    console.log(`${number_1} можна отримати зведенням числа 3 у деякий степінь.`);
} else {
    console.log(`${number_1} не можна отримати зведенням числа 3 у деякий степінь.`);
}


