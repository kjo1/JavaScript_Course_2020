// Function constructor

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