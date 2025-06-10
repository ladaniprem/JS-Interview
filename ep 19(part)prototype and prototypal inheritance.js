// Namaste JavaScript - Prototype and Prototypal Inheritance

// In JavaScript, every object has a hidden property called [[Prototype]]
// We can access this using __proto__

let obj = {
    name: "Ladani prem",
    city: "Bhayavadar",
    getIntro: function() {
        console.log(this.name +"from"+ this.city);
    }
};

let obj2 = {
    name: "raman"
};

// Setting obj2's prototype to obj
obj2.__proto__ = obj;

// Now obj2 can access properties and methods of obj
console.log(obj2.city); // Dehradun
obj2.getIntro(); // Aditya from Dehradun

// Prototype chain
let obj3 = {};
obj3.__proto__ = obj2;
console.log(obj3.name); // Aditya
console.log(obj3.city); // Dehradun
obj3.getIntro(); // Aditya from Dehradun


// Every function in JavaScript has a prototype property
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
};

let person1 = new Person("prem");
console.log(person1.getName()); // prem

// Constructor functions and inheritance
function Student(name, grade) {
    Person.call(this, name); // Call parent constructor
    this.grade = grade;
}

// Setting up inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Adding methods to Student
Student.prototype.getGrade = function() {
    return this.grade;
};

let student1 = new Student("Prem", "A");
console.log(student1.getName()); // Prem
console.log(student1.getGrade()); // A


// All arrays inherit from Array.prototype
let arr = ["Prem", "raman"];

// Adding a new method to Array prototype
// (Not recommended in production - just for demonstration)
Array.prototype.showItems = function() {
    console.log("Array items:");
    this.forEach((item, i) => {
        console.log(`${i}: ${item}`);
    });
};

arr.showItems();
// Output:
// Array items:
// 0: prem
// 1: raman


console.log("PROTOTYPE CHAIN DEMONSTRATION:");
console.log(student1.__proto__ === Student.prototype); // true
console.log(Student.prototype.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null - End of prototype chain


// ES6 Classes (syntactic sugar over prototypal inheritance)
class ModernPerson {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
}

class ModernStudent extends ModernPerson {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
    
    getGrade() {
        return this.grade;
    }
}

const modernStudent = new ModernStudent("jaman", "A+");
console.log(modernStudent.getName()); // jaman
console.log(modernStudent.getGrade()); // A+