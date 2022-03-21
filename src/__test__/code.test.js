const strObj = require('./code');

test('length', () => {
  expect(strObj.stringLength("a")).toBe(1);
});

test('length', () => {
  expect(strObj.stringLength("abcdefghij")).toBe(10);
});

test('reverse', () => {
  expect(strObj.reverseString("abacate")).toBe("etacaba");
});

describe('calculator', () => {
  test('add', () => {
    expect(strObj.calculator.add(1, 2)).toBe(3)
    expect(strObj.calculator.add(2, 2)).toBe(4)
    expect(strObj.calculator.add(3, 2)).toBe(5)
  });
  test('multiply', () => {
    expect(strObj.calculator.multiply(1, 2)).toBe(2)
    expect(strObj.calculator.multiply(2, 2)).toBe(4)
    expect(strObj.calculator.multiply(3, 2)).toBe(6)
  });
  test('subtract', () => {
    expect(strObj.calculator.subtract(1, 2)).toBe(-1)
    expect(strObj.calculator.subtract(2, 2)).toBe(0)
    expect(strObj.calculator.subtract(3, 2)).toBe(1)
  });
  test('divide', () => {
    expect(strObj.calculator.divide(2, 2)).toBe(1)
    expect(strObj.calculator.divide(4, 2)).toBe(2)
    expect(strObj.calculator.divide(6, 2)).toBe(3)
  });
})

test('capitilize', () => {
  expect(strObj.capitalize("abacate")).toBe("Abacate");
});