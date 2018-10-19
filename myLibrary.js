const justify = function(limit,msg) {
  let numberOfSpaces = limit-msg.length;
  let spaces = new Array(numberOfSpaces).fill(" ").join("");
  return spaces;
}

const testLogs = function(args,actualResult,expectedResult,msg) {
  let log = msg + justify(30,msg) + "|";
  log = log + args + justify(20,args.toString) + "|";
  log = log + actualResult + justify(20,actualResult.toString) + "|";
  log = log + expectedResult + justify(20,expectedResult.toString) + "|";
  console.log(log);
}

exports.testLogs = testLogs;
