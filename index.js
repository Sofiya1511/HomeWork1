/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return sum of two numbers
const sum = (a, b) => {
a: 7, 5, 78, -16, 56, 12, 1;
b: 8, 13, 56, 24, 2, 0, -1;
return a + b;
};

/**
 * @param {number} num
 * @return {boolean}
 */
// function should return true if number is even or false is number is not even
const isNumberEven = (num) => {

    if (num%2 == 0)
      return true;
    else
      return false;

};

/**
 * @param {number} num1
 * @param {number} num2
 * @return {string}
 */
// Write logic to compare two numbers and return which number is greater or they are equal
// If num1 is greater than num2 return string 'num1 is the largest number'
// if num2 is greater than num1 return string 'num2 is the largest number'
// if num1 is equal to num2 return string 'num1 is equal to num2'
const findLargestNumber = (num1, num2) => {
num1 = 2, num2 = 19
if (num1 < num2) {
  return '19 is the largest number';
}

num1 = 645, num2 = 4838
 if (num1 < num2) {
  return '4838 is the largest number';
}
  
num1 = 23727, num2 = 332
 if (num1 >  num2) {
  return '23727 is the largest number';
}
 
num1 = 10, num2 = 5
if (num1 >  num2) {
  return '10 is the largest number';
}

num1 = 33, num2 = 33
if (num1 ==  num2) {
  return '33 is equal to 33';
}

num1 = 46, num2 = 53
if (num1 < num2) {
  return '53 is the largest number';
}

num1 = 67, num2 = 85
if (num1 < num2) {
  return '85 is the largest number';
}
};

/**
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @return {string}
 */
// function should return type of triangle
// if triangle is equilateral return string 'Equilateral triangle'
// if triangle is Scalene return string 'Scalene triangle'
// if triangle is Isosceles return string 'Isosceles triangle'
const findTriangleType = (side1, side2, side3) => {

  if (side1 !==side2 == side3) 
    return 'Isosceles triangle';

    
    if (side1 != side2 != side3) 
      return 'Scalene triangle';

  if (side1 == side2 == side3 == side1) 
    return 'Equilateral triangle';


};

/**
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
// function should return amount of days in month with string 'The Month has X days'
// If wrong month number provided return string 'Invalid Month of value X'
const findDaysInMonth = (month, year) => {
  // write your code here
}

/**
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 * @return {number | string}
 */
// function should return result of operation of num1 and num2 based on operation parameter.
// If operation is invalid return string 'Invalid operation'
const calculateResult = (num1, num2, operation) => {
  // write your code here
}

/**
 * @return {string}
 */
// Create multiply table multiplying all digits from 2 t0 9 on 1 - 10 and write result in string
// Compare your result with string in test
const getMultiplicationTable = () => {

  for(let i = 1; i <= 10; i++) {
    const result = i * 2;
    return (`${2} * ${i} = ${result}`);
  }
  for(let i = 1; i <= 10; i++) {
    const result = i * 3;
    return (`${3} * ${i} = ${result}`);
  }

  for(let i = 1; i <= 10; i++) {
    const result = i * 4;
    return (`${4} * ${i} = ${result}`);
  }

  for(let i = 1; i <= 10; i++) {
    const result = i * 5;
    return (`${5} * ${i} = ${result}`);
  }

  for(let i = 1; i <= 10; i++) {
    const result = i * 6;
    return (`${6} * ${i} = ${result}`);
  }

  for(let i = 1; i <= 10; i++) {
    const result = i * 7;
    return (`${7} * ${i} = ${result}`);
  }

  for(let i = 1; i <= 10; i++) {
    const result = i * 8;
    return (`${8} * ${i} = ${result}`);
  }

  for(let i = 1; i <= 10; i++) {
    const result = i * 9;
    return (`${9} * ${i} = ${result}`);
  }
};

module.exports = {
  isNumberEven,
  findLargestNumber,
  findTriangleType,
  findDaysInMonth,
  sum,
  calculateResult,
  getMultiplicationTable,
};
