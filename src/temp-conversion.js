const fahrenheitToCelsius = function (temperature) {
  let sum = 0;
  sum += (temperature - 32) * (5 / 9);
  return Math.round(sum * 10) / 10;
};

const celsiusToFahrenheit = function (temperature) {
  let sum = 0;
  sum += temperature * (9 / 5) + 32;
  return Math.round(sum * 10) / 10;
};

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};
