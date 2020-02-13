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
/*
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
*/


// First Class Functions: Functions Returning Functons
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Kang');
designerQuestion('Kang');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/


// Immediately Invoked Function Expressions (IIFE)
/*
function game() {
    var scroe = Math.random() * 10;
    console.log(scroe >= 5);
}
game();
*/
/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/


// Closures
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1994);
retirementUS(1994);
retirementIceland(1994);

//retirement(66)(1994);

function interviewQuestion(jobTitle) {
    return function (name) {
        if (jobTitle === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        }
        else if (jobTitle === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        }
        else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/


// Bind, call and apply
/*
var kang = {
    name: 'Kang',
    age: 26,
    job: 'developer',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m '
                + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name
                + ', I\'m a ' + this.job + ' and I\'m ' + this.age
                + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: ' Emily',
    age: 35,
    job: 'designer'
};

kang.presentation('formal', 'morning');

kang.presentation.call(emily, 'friendly', 'afternoon');

//kang.presentation.apply(emily, ['friendly', 'afternoon']);

var kangFriendly = kang.presentation.bind(kang, 'friendly');

kangFriendly('morning');
kangFriendly('night');

var emilyFormal = kang.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var years = [1994, 1969, 1941, 2009, 2002];

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

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/


// CODING CHALLENGE 7

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
// Basic Level
/*
(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        }
        else {
            console.log('Wrong answer. Try again :');
        }
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
        ['Yes', 'No'], 0);

    var q2 = new Question('What is the name of this course\'s teacher?',
        ['John', 'Micheal', 'Jonas'], 2);

    var q3 = new Question('What does best descibe coding?',
        ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();
*/

// Expert Level
(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        }
        else {
            console.log('Wrong answer. Try again :');

            sc = callback(false);
        }
        this.dsiplayScore(sc);
    }

    Question.prototype.dsiplayScore = function (score) {
        console.log('Your current score is: ' + score);
        console.log('-----------------------------------');
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
        ['Yes', 'No'], 0);

    var q2 = new Question('What is the name of this course\'s teacher?',
        ['John', 'Micheal', 'Jonas'], 2);

    var q3 = new Question('What does best descibe coding?',
        ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }
    nextQuestion();
})();