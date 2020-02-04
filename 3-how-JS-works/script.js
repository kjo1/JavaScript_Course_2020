///////////////////////////////////////
// Lecture: Hoisting
/*
// functions
calculateAge(1949); // working

function calculateAge(year) {
    console.log(2016 - year);
}

//retirement(1994); // not working

var retirement = function (year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age); // undefined
var age = 23;

function foo() {
    console.log(age); // undefined
    var age = 65;
    console.log(age);
}

foo(); // 65
console.log(age); // 23
*/


///////////////////////////////////////
// Lecture: Scoping
/*
// First scoping example


var a = 'Hello! ';
first();

function first() {
    var b = 'Hi! ';
    second();

    function second() {
        var c = 'Hey! ';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d); // not working - b is not defined as well as c
    // only a and d can be accessed
}
*/

///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/*
calculateAge(1984);

function calculateAge(year) {
    console.log(2020 - year);
    console.log(this);// still the window object(global object)
}
*/
var kang = {
    firstName: "Kang",
    yearOfBirth: 1994,
    calculateAge: function () {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);// still the window object(global object)
        }
        innerFunction();
        */
    }
}

kang.calculateAge();

var mike = {
    firstName: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = kang.calculateAge;
mike.calculateAge();






