// 2. using object literal
const student = { name: 'Sakib AL Hasan', Job: 'cricketer' }
// 2. constructor
const person = new Object();

// const human = Object.create(null)
const human = Object.create(student)
// console.log(human.Job);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}
const peop = new Person('manush', 13);
console.log(peop);

function Manush(name, age) {
    this.name = name;
    this.age = age;
}

const man = new Manush('kader', 12)
console.log(man);