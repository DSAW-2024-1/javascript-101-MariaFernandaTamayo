const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
};

const factorial = (n) => {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

const findLargest = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0 || !arr.every((num) => typeof num === 'number')) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return Math.max(...arr);
};

const countVowels = (str) => {
  if (typeof str !== 'string') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
};

const isPrime = (n) => {
  if (typeof n !== 'number' || n <= 1 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// Ejemplos de uso
console.log(sum(3, 5)); // Output: 8
console.log(factorial(5)); // Output: 120
console.log(findLargest([3, 5, 10, 2])); // Output: 10
console.log(countVowels("Hello, World!")); // Output: 3
console.log(isPrime(7)); // Output: true
