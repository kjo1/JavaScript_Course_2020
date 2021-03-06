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
/*
var firstName = 'Kang';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
   : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/
/*if (age >= 18) {
   var drink = 'beer';
} else {
   var drink = 'juice';
}
*/

/*
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
*/

/*******************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
/*
var height;
height = 23;

if (height || height === 0) {
   console.log('Variable is defined');
} else {
   console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') { // === Strict equality operator
   console.log(' The == operator does type coercion!');
}
*/

/*******************************
 * CODING CHALLENGE 2
 */
/*
var teamJohn, teamMike, teamMary;
var teamJohn = 'John\'s Team';
var teamMike = 'Mike\'s Team';
var teamMary = 'Mary\'s Team';

// 1.
var avgScoreJohn = (89 + 120 + 153) / 3
var avgScoreMike = (116 + 94 + 123) / 3
var avgScoreMary = (97 + 134 + 105) / 3
console.log(avgScoreJohn, avgScoreMike, avgScoreMary)
*/
// 2. Win or Lose (two teams)
/*
avgScoreJohn > avgScoreMike ? console.log(teamJohn + ' wins the average score is ' + avgScoreJohn)
   : console.log(teamMike + ' wins the average score is ' + avgScoreMike);
   */

// including draw
/*
if (avgScoreJohn > avgScoreMike && avgScoreJohn > avgScoreMary) {
   console.log(teamJohn + ' wins, the average score is ' + avgScoreJohn)
}
else if (avgScoreMike > avgScoreJohn && avgScoreMike > avgScoreMary) {
   console.log(teamMike + ' wins, the average score is ' + avgScoreMike)
}
else if (avgScoreMary > avgScoreJohn && avgScoreMary > avgScoreMike) {
   console.log(teamMary + ' wins, the average score is ' + avgScoreMary)
}
else if (avgScoreJohn === avgScoreMike && avgScoreJohn === avgScoreMary) {
   console.log('All teams did great on the same average score of ' + avgScoreJohn);
}
else {
   console.log('There is a draw')
}
*/

/*******************************
 * Functions
 */
/*
function caculateAge(birthYear) {
   return 2018 - birthYear;
}

var ageKang = caculateAge(1994);
var ageMike = caculateAge(1949);
var ageJane = caculateAge(1977);
console.log(ageKang, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
   var age = caculateAge(year);
   var retirement = 65 - age;

   if (retirement > 0) {
      console.log(firstName + ' retires in ' + retirement + ' years.');
   }
   else {
      console.log(firstName + ' is already retired.');
   }
}

yearsUntilRetirement(1994, 'Kang');
yearsUntilRetirement(1949, 'Mike');
yearsUntilRetirement(1977, 'Jane');
*/

/*******************************
 * Function Statements and Expressions
 */

// Function declaration
//function whatDoYouDo(job, firstName){}

// Function expression
/*
var whatDoYouDo = function (job, firstName) {
   switch (job) {
      case 'teacher':
         return firstName + ' teaches kids how to code.';
      case 'driver':
         return firstName + ' drives a cab in Lisbon.';
      case 'desinger':
         return firstName + ' designs beautiful websites.';
      default:
         return firstName + ' does something else.'
   }
}

console.log(whatDoYouDo('teacher', 'Kang'));
console.log(whatDoYouDo('desinger', 'Jane'));
console.log(whatDoYouDo('driver', 'Mike'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/*******************************
 * Arrays
 */

// Initialize new array
/*
var names = ['Kang', 'Mark', 'Jane'];
var years = new Array(1994, 1949, 1977);

console.log(names);
console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var kang = ['Kang', 'Smith', 1994, 'developer', false];

kang.push('blue');
kang.unshift('Mr.');
console.log(kang);

kang.pop();
kang.pop();
kang.shift();
console.log(kang);

console.log(kang.indexOf(1994));

var isTeacher = kang.indexOf('teacher') === -1 ? 'Kang is NOT a teacher' : 'Kang IS a teacher';
console.log(isTeacher);
*/

/*******************************
 * CODING CHALLENGE 3
 */
/*
var bills = [124, 48, 268];

function tipCalculator(amount) {

   if (amount < 50) {
      percent = 0.2;
   }
   else if (amount <= 200) {
      percent = 0.15;
   }
   else {
      percent = 0.1;
   }
   return amount * percent;
}

var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

var totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, totalBills);
*/

/*******************************
 * Objects and properties
 */

/*
// Object literal
var kang = {
  firstName: 'Kang',
  lastName: 'Smith',
  birthYear: 1994,
  faimly: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};
7
console.log(kang.firstName);
console.log(kang['lastName']);
var x = 'birthYear';
console.log(kang[x]);

kang.job = 'developer';
kang['isMarried'] = true;
console.log(kang);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = '1963';
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*******************************
 * Objects and methods
 */
/*
var kang = {
   firstName: 'Kang',
   lastName: 'Smith',
   birthYear: 1994,
   faimly: ['Jane', 'Mark', 'Bob', 'Emily'],
   job: 'teacher',
   isMarried: false,
   calcAge: function (birthYear) {
      this.age = 2020 - this.birthYear;
   }
};

//console.log(kang.calcAge());

//var age = kang.calcAge();

kang.calcAge();
console.log(kang);
*/

/*******************************
 * CODING CHALLENGE 4
 */
/*
var kang = {
   firstName: 'Kang',
   lastName: 'Jo',
   weight: 68,
   height: 1.72,
   calcBMI: function (weight, height) {
      this.BMI = this.weight / (this.height * this.height)
      return this.BMI;
   }
};

var mark = {
   firstName: 'Mark',
   lastName: 'Smith',
   weight: 68,
   height: 1.73,
   calcBMI: function (weight, height) {
      this.BMI = this.weight / (this.height * this.height)
      return this.BMI;
   }
};

//var kangBMI = kang.BMI;
//var markBMI = mark.BMI;
// kang.calcBMI();
// mark.calcBMI();

if (kang.calcBMI() > mark.calcBMI()) {
   console.log(kang.firstName + ' ' + kang.lastName + ' has a higher BMI'
      + '(' + kang.BMI + ')' + ' than ' + mark.firstName + ' ' + mark.lastName
      + '(' + mark.BMI + ')')
}
else if (mark.BMI > kang.BMI) {
   console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI'
      + '(' + mark.BMI + ')' + ' than ' + kang.firstName + ' ' + kang.lastName
      + '(' + kang.BMI + ')')
}
else {
   console.log('Both have the exact same BMI of ' + kang.BMI);
}
*/

/*******************************
 * Loops and iteration
 */

// for loop
/*
for (var i = 0; i < 10; i++) {
   console.log(i);
}
*/
/*
for (var i = 1; i <= 20; i += 2) {
   console.log(i);
}

var kang = ['Kang', 'Smith', 1994, 'developer', false, 'green'];

for (var i = 0; i < kang.length; i++) {
   console.log(kang[i]);
}

// while loop
var i = 0;
while (i < kang.length) {
   console.log(kang[i]);
   i++;
}
*/
/*
// continue and break statements
var kang = ['Kang', 'Smith', 1994, 'developer', false, 'green'];

for (var i = 0; i < kang.length; i++) {
   if (typeof kang[i] !== 'string') continue;
   console.log(kang[i]);
}


for (var i = 0; i < kang.length; i++) {
   if (typeof kang[i] !== 'string') break;
   console.log(kang[i]);
}

// Lopping backwards
for (var i = kang.length - 1; i >= 0; i--) {
   console.log(kang[i]);
}
*/

/*******************************
 * CODING CHALLENGE 5
 */

var john = {
   firstName: 'John',
   bills: [124, 48, 268, 180, 42],
   calcTips: function () {
      this.tips = [];
      this.totalAmount = [];

      for (i = 0; i < this.bills.length; i++) {
         var percent;
         var bill = this.bills[i];

         if (bill < 50) {
            percent = 0.2;
         }
         else if (bill <= 200) {
            percent = 0.15;
         }
         else {
            percent = 0.1;
         }
         this.tips[i] = bill * percent
         this.totalAmount[i] = bill + bill * percent;
      }
   }
}

var mark = {
   firstName: 'Mark',
   bills: [77, 375, 110, 45],
   calcTips: function () {
      this.tips = [];
      this.totalAmount = [];

      for (i = 0; i < this.bills.length; i++) {
         var percent;
         var bill = this.bills[i];

         if (bill < 100) {
            percent = 0.2;
         }
         else if (bill <= 300) {
            percent = 0.1;
         }
         else {
            percent = 0.25;
         }
         this.tips[i] = bill * percent
         this.totalAmount[i] = bill + bill * percent;
      }
   }
}

function averageTip(tips) {
   var sum = 0;

   for (i = 0; i < tips.length; i++) {
      sum += tips[i];
   }
   return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = averageTip(john.tips)
mark.average = averageTip(mark.tips)
console.log(john, mark);

john.average > mark.average ? console.log(john.firstName + ' paid more tips than ' + mark.firstName
   + ' with an average of $' + john.average)
   : console.log(mark.firstName + ' paid more tips than ' + john.firstName
      + ' with an average of $' + mark.average);

/*
var billsMark = [77, 375, 110, 180, 45];

tipCalculator(billsMark);
//billsMark.push(tips, totalBills);

function tipCalculator(amount) {
   var tips = [];
   var totalBills = [];
   var averageTip;

   for (i = 0; i < amount.length; i++) {
      if (amount[i] < 100) {
         percent = 0.2;
      }
      else if (amount[i] <= 300) {
         percent = 0.1;
      }
      else {
         percent = 0.25;
      }
      tip = amount[i] * percent
      total = tip + amount[i];

      tips.push(tip);
      totalBills.push(total);
      //return tips, totalBills;
   }
   console.log('Tips paid: ' + tips, 'Total paid: ' + totalBills);
   return tips, totalBills;
};
*/