function stringLength(string) {
  if (string.length < 1 && string.length > 10) {
    throw new Error('Error');
  }
  return string.length;
}

const reverseString = (string) => {
  return string.split('').reverse().join('');
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  }
}

const capitalize = (string) => {
  const first = string.slice(0, 1).toUpperCase();
  const rest = string.slice(1);
  return first + rest;
}

module.exports = { stringLength, reverseString, calculator, capitalize };