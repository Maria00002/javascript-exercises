const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(arr) {
  let sum = 0;
  for (let key in arr) {
    sum += arr[key];
  }
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  for (let key in arr) {
    result *= arr[key];
  }
  return result;
};

const power = function(a,b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
	if (num == 0 ) {
    result = 1;
  } else {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  }
  return result;
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
