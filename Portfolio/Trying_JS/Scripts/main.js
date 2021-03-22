/*alert("Hello World!");
let num;
do {
    num = prompt("Enter the num more than 100", 0);
} while (num <= 100 && num);*/


/* СЧЁТЧИК ПРОСТЫХ ЧИСЕЛ

let count; 
count = prompt("Enter the counter");
nextPrime:
for (let i=2; i<count; i++) {
    for (let j=2; j<i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}*/


/* ВОПРОС-ОТВЕТ

nextTry:
for (let a; a !== 10;) {
    a = +prompt("5+5=?");
    if (!a) break nextTry;
        switch (a) {
            case 10:
            alert( 'Correctly!' );
            break;
        default:
            alert( "Wrong answer, try one more time." );
    }
if (a !== 10 && !a) continue nextTry;
} */


/* ПРОВЕРКА БРАЗУЕРА

let browser = prompt("Enter your browser below");
let message = (browser === "Edge") ? "You've got the Edge!" : 
(browser === "Chrome" || browser === "Firefox" || browser === "Opera" || browser === "Safari") ? 
"Okay we support these browsers too" : "We hope that this page looks ok";
alert(message);*/


/* ПРОВЕРКА ВОЗРАСТА ФУНКЦИЕЙ

let message;
function checkAge(age) {
    age = prompt("How old are you?");
    (age > 18) ? message = "You may join" : message = confirm("Does your parents know?");
    alert(message);
}
checkAge(); */


/*

let minNum;
function min(num1, num2) {
    num1 = prompt("Enter 1st number");
    num2 = prompt("Enter 2nd number");
    num1 <= num2 ? minNum = num1 : 
    num1 >= num2 ? minNum = num2 : minNum = num1;
    return  alert(minNum);
}
min(); */


/* CHECK OBJECTS

let user = {};
user.name = "John";
user.surname = "Smith";

function isEmpty(user) {
    for (let key in user) {
        return false;
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130 
};
let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

alert(sum); */


//    MULTIPLICATE

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {

//         if (typeof obj[key] === "number" ) {
//             obj[key] *= 2;
//         } 
//     }
// } 


// let calculator = {
    // sum() {
    //   return this.a + this.b;
    // },
  
    // mul() {
    //   return this.a * this.b;
    // },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


// function Calculator() {
    
//     this.read = function read() {
//         this.a = +prompt("a?");
//         this.b = +prompt("b?");
//     };

//     this.sum = function sum() {
//         return this.a + this.b;
//     };
    
//     this.mul = function mul() {
//         return this.a * this.b;
//     };

// };

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );



// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt("enter num");
//     }
    
// }

// let accumulator = new Accumulator(+prompt("enter starting value")); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// function alertArr () {
//     for (let genre of styles) {
//     alert( genre );
//     }
// };

// let styles = ["Jazz", "Blues"];
// styles.push("Rock'n'Roll");
// alertArr();
// styles[Math.floor((styles.length - 1) / 2)] = "Classic"
// alertArr();
// alert(styles.shift());
// styles.unshift("Rap", "Reggae");
// alertArr();

function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Введите число", 0);
        
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    
    let sum = 0;
    
    for (let number of numbers) {
        sum += number;
    }

    return sum;
};

alert( sumInput() );
