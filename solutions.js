const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return undefined; // o return null;
  }
  return a + b;
};

const factorial = (n) => {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return undefined; // o return null;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

const findLargest = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0 || !arr.every((num) => typeof num === 'number')) {
    console.log("Los datos de entrada no son adecuados");
    return undefined; // o return null;
  }
  if (arr.some(isNaN)) {
    console.log("Los datos de entrada no son adecuados");
    return undefined; // o return null;
  }
  return Math.max(...arr);
};

const countVowels = (str) => {
  if (typeof str !== 'string') {
    console.log("Los datos de entrada no son adecuados");
    return undefined; // o return null;
  }
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
};

const isPrime = (n) => {
  if (typeof n !== 'number' || n <= 1 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return undefined; // o return null;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// Exportar las funciones
module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime
};