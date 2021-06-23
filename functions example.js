const Mocha = require('mocha')
const assert = require('assert')
const mocha = new Mocha()

// --------------------ordinary function----------------------------------------

function myOrdinaryFunction(a, b) {
    return a * b;
}

// ---------------------function expression-----------------------------------

let myFunctionExpression = function (a, b) {
    return a * b
};

// ---------------------arrow function-----------------------------------

const myArrowFunction = (a, b) => { return a * b }

// -----------------------function constructor-----------------------------------

function myFunctionConstructor(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
    this.returnStuff = function () {
        return this.firstName + " " + this.lastName
    }
}

var x = new myFunctionConstructor("John", "Doe");

// ------------------testing functions using mocha--------------------------

mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('Test suite', function () {
    it('myOrdinaryFunction', function () {
        assert.equal(myOrdinaryFunction(1, 1), 1);
    })
    it('myFunctionExpression', function () {
        assert.equal(myFunctionExpression(1, 2), 2);
    })
    it('myArrowFunction', function () {
        assert.equal(myArrowFunction(1, 3), 3);
    })
    it('myFunctionConstructor', function () {
        assert.equal(x.returnStuff(), 'John Doe');
    })
})

mocha.run()