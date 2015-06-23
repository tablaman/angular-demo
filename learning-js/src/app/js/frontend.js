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

// --------------------------------------------------
// SUPER IMPORTANT!!!
// IIFE: Immediately Invoked Function Expressions
// --------------------------------------------------
var IIFEFirstName = 'John';

// now we want to create a function that just 'sits' there and can be executed, 
// rather than being a function statement or anonymous function
// This is what we see with most JS frameworks.
// NOTE: any vars sitting inside of the function scope will have their OWN execution context, not the GLOBAL execution context

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

// --------------------------------------------------
// SUPER IMPORTANT
// FUNCTIONAL PROGRAMMING
// --------------------------------------------------

function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
})
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
})
console.log(arr3);

// Another usecase
var checkPastLimit = function(limiter, item) {
    return limiter > item;
}

// Now how do we pass this into mapForEach, since it only takes 1 param.
// by using CURRYING

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

// Ok lets simplify this even further - Mili's way
var curryMyLimit = function(val) {
    return this.checkPastLimit.bind(this, val);
}

var arr5 = mapForEach(arr1, curryMyLimit(2));
console.log(arr5);

// Actual answer
var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return limiter > item;
    }.bind(this, limiter);
};

var arr6 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr6);



// --------------------------------------------------
// One of the most frequenty used parts of Functional Programming
// Underscore.js! and Lodash.com
// The open souce education
// TODO: go through the source code and understand how they're written


var arr7 = _.map(arr1, function(item) {
    return item * 3;
});

console.log(arr7);

var arr8 = _.filter([2, 3, 4, 5, 6, 7], function(item) {
    return item % 2 === 0;
})

console.log(arr8);

// --------------------------------------------------
// SUPER IMPORTANT
// OOP JAVASCRIPT AND PROTOTYPAL INHERITANCE
// --------------------------------------------------
// classical (how its done over time) VS prototypal inheritance
// Classical inheritance
// - verbose
// - has friend, protected, private, interface
// 
// Prototypal Inheritance
// - simple, flexible, extensible, easy to understand

// We can also think of this as an abstract class in Software engineering.
var person = {
    firstname: 'Default Firstname',
    lastname: 'Default Lastname',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

// Main reference object
var john = {
    firstname: 'John',
    lastname: 'Doe'
};

console.log(john);

// Never never never do this! i.e. accessing __proto__ - this will slow down execution - for demo purposes only!
john.__proto__ = person;
console.log(john.getFullName());

// Now to show how the execution does the references in the prototype chain, when a certain var
// (e.g. lastname) isn't available in the first object, in this case, sam{}

var sam = {
    firstname: 'Sam'
};

sam.__proto__ = person;

console.log(sam.lastname);
console.log(sam.getFullName());

// Everything is an object (or a primitive)

var a = {};
// if I do
// a.__proto__
// >> Object {}
// a.__proto__.__proto__
// >> null
//
// Properties on the function object a.__proto__. <---options
// toString, valueOf, constructor, isPropertyOf, propertyIsEnumarable and others pertaining to Object

var b = function() {};
// b.__proto__
// >> function Empty()
// b.__proto__.__proto__
// >> Object {}
// b.__proto__.__proto__.__proto__
// >> null
//
// Properties on the function object b.__proto__. <---options
// hasOwnProperty, name, length, argument, apply, bind, call etc.

var c = [];
// c.__proto__
// >> []
// c.__proto__.__proto__
// >> Object {}
// c.__proto__.__proto__.__proto__
// >> null
//
// Properties on the function object c.__proto__. <---options
// pop, map, length, push, reverse, reduce, reduceRight, shift, slice, sort, slice, map 
// and others pertaining to an array




// --------------------------------------------------
// Reflection and Extend ( helps with Composition of objects )
// Def: An object can look at itself, listing and 
// changing its properties and methods
// --------------------------------------------------

for (var prop in john) {
    // if (john.hasOwnProperty('firstname')) {

    console.log(prop + ': ' + john[prop]);
    // }
}

// the above will reveal everything including what __proto__ has
// to look into just John's own object
// if (john.hasOwnProperty('firstname')) ...

// using _underscore to EXTEND properly
// cos we don't want to be using __proto__ as it's bad practice.
var jane = {
    address: '111 main st.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {

    }
}
_.extend(john, jane, jim);
console.info(john);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Aside
// console.
//   log
//   warn
//   info
//   error

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Aside - showcasing My knowledge in closures and arguments
// Arguments - what are they again?
var howManyArgs = function(arg1, arg2, arg3) {
    return function() {
        return arguments.length;
    }
}

console.info(howManyArgs('bla', 's', 3)('s', 's', 'sd', '1', 1, 2, 3, 4, 5));


// exploring 'this'
// works in the Global Execution Context
var first;

function PersonObjectCreator() {
    console.log(this);
    this.first = 'default first';
    this.last = 'default last';
    console.log('PersonObjectCretor invoked');

}
console.log(this.first);

PersonObjectCreator();

console.log(this.first);

console.log(this.last);


// THE FUNCTION CONSTRUCTORS
// Def: A normal function that's used to construct objects
// The 'this' variable points to a new empty object, and that object is
// returned from the function automatically.
// --------------------------------------------------
// Now lets try and turn this function into an object 
// At this point the 'this' will no longer refer to the GEC
// 'this' will refer to the object created
// Using 'new' sets the 'this' to brand new empty object
// and if you don't have a 'return' statement, it'll just return an empty object instead of undefined.
// Caveat: remember, as long as the function doesn't return something - see // below
// --------------------------------------------------
// Good practice would be to capitalise the first word for Function constructors;
// it helps differentiate func constructors from normal functions.
// Danger: you can accidentally leave out 'new' resulting in undefined. So be careful!

function PersonObj(firstname, lastname) {
    console.log(this);
    this.first = firstname;
    this.last = lastname;
    console.log('PersonObjectCretor invoked');

    // return { greeting: 'I got in the way' }; <-- don't return if you want to create function objects

}

var samuel = new PersonObj('sam', 'garason');
console.info(samuel);
// to prove that this.first in the GEC isn't affected
console.log(this.first);

// THE FUNCTION CONSTRUCTORS and '.prototype'
// When you use function constructor/object, the prototype is already set for you
// the prototype of the function is NOT the prototype of it (if that makes sense)
// It is the prototype of the OBJECT created by the function constructor. (using new)

PersonObj.prototype.getFullName = function() {
    return this.first + ' ' + this.last;
}

console.info(samuel);

// You can keep adding more to the prototype as you go along
PersonObj.prototype.getFullFormalName = function() {
    return this.last + ', ' + this.first;
}

console.info(samuel);
console.log(samuel.getFullFormalName());

// Q: you may ask, why not put the getFullFormalName and other methods right inside of PersonObj?
// A: you save memory by doing it using prototypes!
// If you had 1000 objects, then these methods inside of the function constructor will take
// up more space in memory. Where as, if you were to inject the methods as prototypes, then
// it saves memory.


// Built in Function constructors
// eg. var a = new Number(3);
// a.toFixed();
// 
// var a = new String("John");
// String.prototype.indexOf('o');
// a.indexOf('o') --> 1

// remember that in every case, it's creating objects with already attached methods.

var day = new Date("3/1/2015");
console.log(day.toDateString());

// another example of prototypal inheritance
String.prototype.isLengthGreaterThan = function(limit) {
    // what does 'this' point at? It points at the String object's prototype chain
    return this.length > limit;
}
console.info('is John islengthgreat than:...');
console.log("John".isLengthGreaterThan(3));

// Dangerous ASIDE
// It's better not to create primitives using inbuilt function constructors
// var b = new Number(3);
// a = 3;
// >> 3
// a == b
// >> true
// a === b <-- best equality operator: will check for type and if there's no match, false
// >> false <--!

// Some js programmers use new Nubmer() without realising that they're creating new Objects!
// c = new Number (3);
// >> Number {[[PrimitiveValue]]: 3}


// Framework: Moment.js for Date data manupulation!

// Dangerous ASIDE
// Arrays: when looping through use just for (var i = 0; i < ...) instead of
// for (var prop in arr)

Array.prototype.myCustomFeature = 'cool';

var arr = ['John', 'Jane', 'Jim']; // essentially calling new Array()

for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}
// yields...
// >>0: John
// >> 1: Jane
// >> 2: Jim
// >> myCustomFeature: cool <-- it goes into the prototype properties as well.
// therefore, not recommened to use for...in
// instead use for (var i = 0; i < arr.length; i++)

// OBJECT.CREATE
// --------------------------------------------------
// Javascript includes pure prototypal inheritance - embrace it!

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'hi ' + this.firstname;
        // note: if I say just firstname, without this.firstname, it will 
        // only look inside of the function, then to global scope!
        // i.e. objects don't create their own execution contexts!
    }
}

var john = Object.create(person);
john.firstname = 'Joe';
john.lastname = 'Blah';
console.log(john.greet());

// you can mutate if you like
person.hello = function(someName) {
    return 'hello ' + someName;
}

console.log(john.hello(john.firstname));

// What if you want to work on older code where engine doesn't recognize Object.create()?
// Use a Polyfill
if (!Object.create) {
    Object.create = function(o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation' + ' only accepts the first parameter.');
        }

        function F() {}
        F.prototype = o;
        return new F();
    };
}


// ODDS & ENDS
// --------------------------------------------------

var people = [{
    firstname: 'Joe',
    lastname: 'wilson',
    addresses: [
        '111 south morang road',
        '200 disney road kolupitiya'

    ]
}, {
    firstname: 'Mark',
    lastname: 'Dawson',
    addresses: [
        '1 south morang road',
        '37 disney road kolupitiya'

    ]
}]


// typeOF, instanceOf, etc...
var ab = 3;
console.log(typeof ab);

var d = [];
console.log(typeof d); // weird
console.log(Object.prototype.toString.call(d)); // Will yield Object Array

console.log(typeof null); // a bug since, like, forever....! if something's null, it'll return an object!

var z = function() {};
console.log(typeof z);

// Strict Mode
// --------------------------------------------------
// With flexibility comes lack of rules
// uses either inside of function or at top, which applies to global context
function logNewPerson() {
    "use strict";

    var person;
    var persom = {};
    console.log(persom);
}

logNewPerson();




// Diving into jQuery
// --------------------------------------------------
$('h1').text("helelel");
var q = $('ul');
console.log(q);


// Method Chaining
// Def: Calling one method after another, and each method affects the parent
// object. So, obj.method1().method2() where both methods end up with 'this'
// variable pointing to 'obj'
// eg. addClass chaining
// --------------------------------------------------


// TODO: my attempt to do chaining - need to revisit
// function mainObj() {
//     addInfinite: function() {
//         var tempAdd 0;
//         if (arguments.length > 0) {
//             for (var i = 0; i < arguments.length; i++) {
//                 tempAdd += arguments[i];
//             }
//         }
//         console.info('added result : ' + tempAdd);
//         return this;
//     }
// }

// function someFunc () {};

// someFunc.extend({
//     addInfinite: function() {
//         var tempAdd = 0;
//         if (arguments.length > 0) {
//             for (var i = 0; i < arguments.length; i++) {
//                 tempAdd += arguments[i];
//             }
//         }
//         console.info('added result : ' + tempAdd);
//         return this;
//     }
// })



// Our mini framework/library
// Lib name: GREETR
// Purpose: to tell someone hello :)
// Requirement: when given first name last name and optional language,
// it generates formal and informal greetings.
// should support jQuery

// Create new execution context and expose what we need in global
(function(global, $) {

    var Greetr = function(firstName, lastName, language) {

        return new Greetr.init(firstName, lastName, language);
    }

    // Keep this hidden
    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };


    Greetr.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw new Error ("Invalid language");
            }
        },

        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function (formal) {
            var msg;

            // if undefined or null, will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullname());

            }
            return this;
        },

        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        }, 
        // Accept jQuery and do some stuff with it
        setText: function(selector, value) {
            if (!$) {
                throw 'jQuery not loaded';

            }
            if (!selector) {
                throw 'no selector provided!';
            }

            $(selector).html(value);

            return this;
        }
    };

    Greetr.init = function(firstName, lastName, language) {
        self = this;
        self.firstName = firstName || 'Default firstname';
        self.lastName = lastName || 'Default lastname';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

    // Add some methods
    Greetr.prototype

    //Expose to outside world
    global.Greetr = global.g$ = Greetr;

}(window, jQuery));



// Now invoke it!
var g = g$('john', 'doe');

g.greet();
g.greet().setLang('es').greet(true).setText("h1","blaaaaah");
console.log(g);










//
