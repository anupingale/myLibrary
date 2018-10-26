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

const logTest = function(args,actual,expected,msg) {
  let log = justify(5,getSerialNumber().toString()) + "|" + justify(30,msg) + "|";
  log = log + justify(40,JSON.stringify(args)) + "|";
  log = log + justify(20,JSON.stringify(actual)) + "|";
  log = log + justify(20,JSON.stringify(expected)) + "|";
  incrementTestNumber();
  console.log(log);
  let character = String.fromCharCode(9472);
  let dottedLine = new Array(120).fill(character).join("");
  console.log(dottedLine);
}

exports.logTest = logTest;
