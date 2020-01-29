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