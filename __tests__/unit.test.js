// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// True isPhoneNumber unit tests

test('check number of 3 digits dash 4 digits dash four digits', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('check normal number with parentheses area code', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

// False isPhoneNumber unit tests
test('some dashes phone number', () => {
  expect(isPhoneNumber('123 456 7890')).toBe(false);
});

test('some lettered phone number', () => {
  expect(isPhoneNumber('qwe-rty-yuio')).toBe(false);
});

// True isEmail unit tests
test('typical gmail email adress', () => {
  expect(isEmail('potato@gmail.com')).toBe(true);
});

test('typical email adress with different domain, letters (cap/non) and numbers', () => {
  expect(isEmail('aBe123GDSSDd@ucsd.edu')).toBe(true);
});

// False isEmail unit tests
test('ending of email', () => {
  expect(isEmail('potato@gmail')).toBe(false);
});

test('special characters in email', () => {
  expect(isEmail('*6&%@gmail.com')).toBe(false);
});

// True isStrongPassword unit tests
test('only letters password', () => {
  expect(isStrongPassword('hElLoTherE')).toBe(true);
});

test('first char is letter, rest is numbers', () => {
  expect(isStrongPassword('e12334')).toBe(true);
});

// False isStrongPassword unit tests
test('numbers password', () => {
  expect(isStrongPassword('9826349')).toBe(false);
});

test('short password', () => {
  expect(isStrongPassword('hi')).toBe(false);
});

// True isDate unit tests
test('2 digit month/2 digitday/year date', () => {
  expect(isDate('12/06/2345')).toBe(true);
});

test('one digit month/one digit day/year date', () => {
  expect(isDate('9/2/2345')).toBe(true);
});
// False isDate unit tests
test('letters in date', () => {
  expect(isDate('9/t/tuip')).toBe(false);
});

test('year four letters', () => {
  expect(isDate('12/06/12')).toBe(false);
});

// True isHexColor unit tests
test('3 char hex code', () => {
  expect(isHexColor('#45c')).toBe(true);
});

test('6 char hex code, no pound sign', () => {
  expect(isHexColor('123456')).toBe(true);
});

// False isHexColor unit tests
test('4 char hex code', () => {
  expect(isHexColor('455c')).toBe(false);
});

test('invalid chars in hex code', () => {
  expect(isHexColor('*98')).toBe(false);
});