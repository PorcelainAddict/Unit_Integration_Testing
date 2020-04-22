var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  //add
  it('should add two numbers together', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    const result = calculator.runningTotal
    assert.deepStrictEqual(result, 5)
  })

  //subtract
  it('should be able to subtract', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    const result = calculator.runningTotal
    assert.deepStrictEqual(result, 3)
  })

  //multiply
  it('should be able to multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    const result = calculator.runningTotal
    assert.deepStrictEqual(result, 15)
  })

  //divide
  it('should be able to divide', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    const result = calculator.runningTotal
    assert.deepStrictEqual(result, 3)
  })

  //concatenate
  it('should be able to handle multiple number clicks', function(){
    calculator.numberClick(3)
    calculator.numberClick(7)
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 373)
  })

  //chain multiple operations
  it('should chain multiple operations together', function(){
    calculator.numberClick(20)
    calculator.operatorClick('+')
    calculator.numberClick(20)
    calculator.operatorClick('-')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 35)
  })

  //calculator should be able to clear, not interfering with calculation
  it('should chain multiple operations together', function(){
    calculator.numberClick(20)
    calculator.operatorClick('+')
    calculator.numberClick(20)
    calculator.operatorClick('-')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(calculator.previousTotal, 35)
    assert.equal(calculator.runningTotal, 0)
  })

});
