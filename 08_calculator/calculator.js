const add = function(num1,num2) {
	return num1+num2
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(thisArray) {
	const sumAll=thisArray.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
  return sumAll
};

const multiply = function(mulArray) {
  const mulAll=mulArray.reduce((accumulator,currentValue)=>accumulator*currentValue);
  return mulAll
};

const power = function(num1,num2) {
	return Math.pow(num1,num2)
};

const factorial = function(num) {
	if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
