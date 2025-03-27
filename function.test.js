// mathOperations.test.js

const { add, subtract, multiply, divide } = require('./function');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divides 6 / 3 to equal 2', () => {
  expect(divide(6, 3)).toBe(2);
});

test('divides by 0 returns error message', () => {
  expect(divide(6, 0)).toBe('Cannot divide by zero');
});
