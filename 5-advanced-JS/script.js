// Function constructor
/*
var kang = {
    name: 'Kang',
    yearOfBirth: 1994,
    job: 'developer'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2020 - this.yearOfBirth)
};

Person.prototype.lastName = 'Smith';

var kang = new Person('John', 1994, 'devloper');
var jane = new Person('Jane', 1979, 'designer');
var mark = new Person('Mark', 1953, 'retired');

kang.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(kang.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/



// Object.create
/*
var personProto = {
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
};

var kang = Object.create(personProto);
kang.name = 'Kang';
kang.yearOfBirth = 1994;
kang.job = 'developer';

var jane = Object.create(personProto,
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1979 },
        job: { value: 'designer' }
    });
*/

// Primitives vs Objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'Kang',
    age: 30
};
var obj2 = obj1;
obj1.age = 27;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = ' San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/


// First Class Functions: Passing Functions as Arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }
    else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);




