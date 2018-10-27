const justify = function(limit,msg) {
  let numberOfSpaces = limit-msg.length;
  let spaces = new Array(numberOfSpaces).fill(" ").join("");
  return msg+spaces;
}

let testNumber = {number:1};

const incrementTestNumber = function() {
  testNumber.number++;
}

const getSerialNumber = function() {
  return testNumber.number;
}

const createDottedLine = function() {
  let character = String.fromCharCode(9472);
  dottedLine = new Array(140).fill(character).join("");
  console.log(dottedLine);
}

const printLog = function(func,args,actual,expected) {
  let log = justify(5,getSerialNumber().toString()) + "|";
  log = log + justify(20,func.toString()) + "|";
  log = log + justify(40,JSON.stringify(args)) + "|";
  log = log + justify(35,JSON.stringify(actual)) + "|";
  log = log + justify(35,JSON.stringify(expected)) + "|";
  incrementTestNumber();
  console.log(log);
  createDottedLine();
}

exports.printLog = printLog;
