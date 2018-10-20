const assert = require("assert");
const library = require("./myLibrary");
const {testLogs} = library;

const sum = function(a,b) {
  return a+b;
}

const testSum = function(num1,num2,expectedResult,msg) {
  let actualResult = sum(num1,num2);
  let args = [num1,num2];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepStrictEqual(actualResult,expectedResult);
  return ;
}

testSum(1,2,3,"add two numbers");
testSum(30,40,70,"add");
