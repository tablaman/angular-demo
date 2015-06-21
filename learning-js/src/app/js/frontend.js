//

// LIst items array

var list = ["one", "two", "three", "four", "five", "six"];

function displayItems() {
    for (var i = 0; i < list.length; i++)
        console.log('items : ' + list[i] + "\n");
}


// Objects
var newObjectList = [{
        name: "hammer",
        cost: "3.99",
        description: "Super tool"


    }, {
        name: "motor",
        cost: "5.99",
        description: "Super moter"


    }, {
        name: "computer",
        cost: "5.99",
        description: "computer tool"
    }

]

// hello
var a = "HELLO";

if (a === undefined) console.log('a is UNDEFINED!');

function b() {
    console.log('hello b');
}

b();
console.log(a);


// Context + scope
// --------------------------------------------------
var myVar = 88;

function hello() {
    function b() {
        console.log(myVar);
    }

    b();
}

hello();



// Scope - simulate async 
// js won't look at event queue until execution is complete!
// --------------------------------------------------
function waitThreeSecs() {
    var ms = 1000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event');
}

document.addEventListener('click', clickHandler);

waitThreeSecs();
console.log('finished execution');



// primitive types inclue: unfefined, null, boolean, string, number, symbol (ES6 future)
var c = null;

// Functions are Objects too!
var user = {
    firstName: 'Sam',
    lastName: 'Smith',
    address: {
        street: '1/11 worthington street',
        suburb: 'burwood'
    }
}


// Namesapcing - faking it
// --------------------------------------------------
var language = {};
language.english = "hello";
language.spanish = 'Hola';


// note: calling a function statement earlier when function isn't declared until down below works fine, whereas
// calling a function expression before it's declared, will cause an error.
someStatement();

// --------------------------------------------------
// Why is this the case?
// When JS file is first executed, the function statements and var names are HOISTED - 
// e.g. it takes function xxx statements and reads into memory, followed by var names.
// in the case of the var name, if you have 
// var hello; <-- undefined in memory
// 
// So in the case of the anonStatement - that's initially committed into memory as just undefined.
// It is only when js then goes through executing of line by line that the anonymous function is committed into memory
// Therefore, you need to put the anonStatement (); AFTER the declaration of the anon function!

// --------------------------------------------------

// Function statement vs expression
// --------------------------------------------------
// This statement just gets stored in memory - i.e. hoisted.
function someStatement() {
        console.log('message from some statement function');
    }
    // you can also do the following
someStatement.hello = 'hi';
//expression - anonymous
// the expression results in an object when executed, the value being a function object
var anonStatement = function() {} // remember functions are js objects
    // to call statement
anonStatement();

// First class functions continued - run a function inside another function!
function log(a) {
    console.log('contents: >> ' + a);
    a();
}

log(function() {
    console.log('hello');
});

// By value and by REFERENCE
// All objects react BY REFERENCE
// --------------------------------------------------
// by value: copy
var a = 3;
var b;

b = a;
a = 2;
// but doesn't change value of b, which is 3.

// BY REFERENCE  - all objects (including functions!) - i.e. pointing to the same location in memory.
var c = {
    greeting: 'hi '
};
var d;
d = c; // referenced - pointing to the same one

c.greeting = 'hello'; // mutate (immutable = can't be changed)

// BY REFERENCE - even as parameters

function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c); // Hola
console.log(d); // Hola

// equals operator sets up new memory space (new address)
c = {
    greeting: 'Howdy'
};


// THIS explained
// --------------------------------------------------

function thisExplained() {
    console.log(this);
}

var whatsThis = function() {
    console.log(this);
}

// In both cases, this refers to global execution context.
// However, it changes when you look at functions (objects) inside of objects.

changeThisContext = {
    name: 'This is my name',
    showThis: function() {
        this.name = "I have now changed my value of name";
        console.log(this);

        // Now what happens to 'this' when I declare another function here
        var setName = function(theName) {
                this.name = theName;
            }
            // REF 1: setname will set the name value at the root level (i.e. global context) instead! 
            // this is WRONG! but just the way javascript works!
        setName('updated again!');
        console.log(this);
    }
}

changeThisContext.showThis();

// The Solution - using SELF to give contextual reference inside of the object.
changeThisTheProperWay = {
    name: 'This is my name',
    showThis: function() {
        // to Circumvent 'REF 1' above we set self
        var self = this;
        self.name = "I have now changed my value of name";
        console.log(self);

        var setName = function(theName) {
            self.name = theName;
        }
        setName('updated again!');
        console.log(self);
    }
}

changeThisTheProperWay.showThis();


// Arrays
// --------------------------------------------------
var arr = [
    1,
    false, {
        name: 'Tony',
        address: '111 main street'
    },
    function(name) {
        console.log('From Array, hello ' + name);
    },

];

// To run function inside array
arr[3](arr[2].name);

// Arguments and SPREAD
// BY default js engine adds args into a function
// --------------------------------------------------
function greet(firstName, lastName, language) {
    if (arguments.length === 0) {
        console.log('no args have been passed!');
        console.log('-----+++++-----');
        return;
    }
    // what if no vals have been passed
    firstName = firstName || 'default first name';
    lastName = lastName || 'default last name';
    language = language || 'en';

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);
    console.log('arg 0: ' + arguments[0]);
    console.log('------------------');
    console.log('hello ' + firstName + ' ' + lastName);

}

greet();
greet('mike');
greet('mike', 'brown');

// Another way to pass only what you need to
function firstNameOnly(firstName) {
    greet(firstName, ' ', ' ');
}

function firstLastOnly(firstName, lastName) {
    greet(firstName, lastName, ' ');
}

firstNameOnly('Sam');
firstLastOnly('John', 'Smith');



// Avoid automatic ';' insertion
// --------------------------------------------------
// if you have
// return  <-- this will insert a ';' avoiding the rest of the statement
// {
//     theObj: ' hello there ';
// }
//
// THE SOLUTION
// return  {
//     theObj: ' hello there ';
// }


// IIFE: Immediately Invoked Function Expressions
// --------------------------------------------------
var IIFEFirstName = 'John';

// now we want to create a function that just 'sits' there and can be executed, 
// rather than being a function statement or anonymous function
// This is what we see with most JS frameworks.
// NOTE: any vars sitting inside of the function scope will have their own execution context, not the GLOBAL execution context

(function(name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
}('Mika'));



// Passing Global exec context
var myNewNameGlobal = "Bullshit";
(function(global, name) {
    global.myNewNameGlobal = "kakki";
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
}(window, myNewNameGlobal));

console.log(myNewNameGlobal);


// --------------------------------------------------
// Advanced Javascript
// CLOSURES
// --------------------------------------------------

function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(function() {
            console.log(i);
        });
    }

    return arr;
}

var fs = buildFunctions();

// Here we will get 3 in all instances as the function is called only when
// i has a value of 3. 
fs[0]();
fs[1]();
fs[2]();


// How do we now get 0,1,2?
function buildFunctions2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i)));
    }

    return arr;
}
var fs2 = buildFunctions2();

// Here we will get 3 in all instances as the function is called only when
// i has a value of 3. 
fs2[0]();
fs2[1]();
fs2[2]();


// CLOSURES inside factories
// --------------------------------------------------
function makeGreeting(language) {

    return function(firstname, lastname) {
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }
        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }

}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');


// CLOSURES and Callbacks
// --------------------------------------------------
// jQuery uses these
// $("button").click(function () {
// });
//

function sayHiLater() {

    var greeting = 'Hi!';

    setTimeout(function() {
        console.log(greeting);

    }, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {
    var a = 1000; // some work
    var b = 2000; // some other work

    callback(); // the callback: it runs the function I gave it.
}

tellMeWhenDone(function() {
    console.log('I am done - this is the callback');
});

// Call (), Apply (), Bind () - how to reassign 'this'
// ---------------------------------------------------

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {

        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;

    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
}

// bind 'this' to different context - i.e. person object in this case
// bind creates a copy
var logPersonName = logName.bind(person);

logPersonName('en');

// Use call to execute
logName.call(person, 'en', 'es')

// use apply to have array of methods
logName.apply(person, ['en', 'au']);



// Function borrowing
// You can grab stuff from other methods as long as you have same property names
var person2 = {
    firstname: 'Jane',
    lastname: 'Doober'
}

console.log(person.getFullName.apply(person2));


// Function Currying
// Def: creating a copy of a function but with some preset parameters
// - very useful in mathematical situations
// great usage for 'bind'
// --------------------------------------------------

function multiply(a, b) {
    return a * b;
}

var multipleByTwo = multiply.bind(this, 2); // permanently set '2' in copy
var multipleByTwoAndOne = multiply.bind(this, 2, 1); // permanently set '2' * '1' in copy

console.log(multipleByTwo(3));
console.log(multipleByTwoAndOne(3));


// FUNCTIONAL PROGRAMMING
// --------------------------------------------------






















//
