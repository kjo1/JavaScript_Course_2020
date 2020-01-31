/********************
 * Variables and data types
 *
 */

/*
// string
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
// number
var age = 28;

// boolean
var fullAge = true;
console.log(fullAge);

// undefined
var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'Hohn and Mark';
var if = 23; // can't be used

// variable names work with string, $ and _
// better startin with a letter, $ and _
// cannot use reserved JS words like delete, function and if
*/

/********************
 * Variables mutation and type coercion
 *
 */

/*
var firstName = 'John'
var age = 21;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '
   + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty one';
job = 'drive';

alert(firstName + ' is a ' + age + ' year old '
   + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/


/************************************
 * Basic operators
 */
/*
var year, yearJohn, yearMark;
now = 2020;
ageJohn = 29;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/************************************
 * Basic precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Mutiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);
console.log(y);

// More operators
x *= 2; //x = x * 2;
console.log(x);
x += 10;
console.log(x);

x++; //x = x + 1; //x += 1;
console.log(x);
x--;
console.log(x);


// BMI Calculator
var heightJohn = 1.65;
var heightMark = 1.72;

weightJohn = 60;
weightMark = 70;

var bmiJohn = weightJohn / (heightJohn * heightJohn);
var bmiMark = weightMark / (heightMark * heightMark);

// console.log(bmiJohn);
// console.log(bmiMark);
console.log(bmiMark, bmiJohn);

var bmiResult = bmiJohn > bmiMark;
var result = 'Is John\'s BMI higher than Mark\'s?';

console.log(result + ' ' + bmiResult);
*/




/*******************************
 * If / else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
   console.log(firstName + ' is married!');
} else {
   console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
   console.log(firstName + ' is married!');
} else {
   console.log(firstName + ' will hopefully marry soon :)');
}

var heightJohn = 1.65;
var heightMark = 1.72;

var weightJohn = 60;
var weightMark = 80;

var bmiJohn = weightJohn / (heightJohn * heightJohn);
var bmiMark = weightMark / (heightMark * heightMark);

if (bmiMark > bmiJohn) {
   console.log('Mark\'s BMI is higher than John\'s.');
} else {
   console.log('John\'s BMI is higher than Mark\'s.');
}
*/

/*******************************
 * Boolean logic
 */
/*
var firstName = 'John';
var age = 16;

if (age < 13) {
   console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
   console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
   console.log(firstName + ' is a young man.');
} else {
   console.log(firstName + ' is a man.');
}
*/

/*******************************
 * The Ternary Operator and Switch Statements
 */

var firstName = 'Kang';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
   : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 18) {
   var drink = 'beer';
} else {
   var drink = 'juice';
}
*/

// Switch statement
var job = 'instructor';
switch (job) {
   case 'teacher':
   case 'instructor':
      console.log(firstName + ' teaches kids how to code');
      break;
   case 'driver':
      console.log(firstName + ' drives an uber in Lisbon');
      break;
   case 'designer':
      console.log(firstName + ' designs beautiful websites.')
      break;
   default:
      console.log(firstName + ' does something else.')
}


switch (true) {
   case age < 13:
      console.log(firstName + ' is a boy.');
      break;
   case age >= 13 && age < 20:
      console.log(firstName + ' is a teenager.');
      break;
   case age >= 20 && age < 30:
      console.log(firstName + ' is a young man.');
      break;
   default:
      console.log(firstName + ' is a man.');
}
