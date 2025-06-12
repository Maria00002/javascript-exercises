const convertToCelsius = function(temp) {
  // fahrenheit to celsius
  // (temp - 32 ) * 5 / 9
  let celsius;
  let rounded;
  celsius = (temp - 32) * 5 / 9;
  // round to one decimal place
  return rounded = Math.round(celsius * 10) /10;

};

const convertToFahrenheit = function(temp) {
  // celsius to fahrenheit
  // (temp * 9 / 5 + 32)
  let fahrenheit;
  let rounded;
  fahrenheit = (temp * 9 / 5) + 32;
  rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;
  // round to one decimal place
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
