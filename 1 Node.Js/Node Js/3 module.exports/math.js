console.log("hello from math");
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;

let obj = {
  sum: sum,
  mul: mul,
};

//different types to export

module.exports = obj;

module.exports.sum = (a, b) => a + b;

module.exports = {
  sum: sum,
  mul: mul,
};

//one more method
module.exports.g = 9.8;
exports.PI = 3.14;
