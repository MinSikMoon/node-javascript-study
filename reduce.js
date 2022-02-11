const scores = [10, 20, 30, 40, 50];
const sum = scores.reduce((a, b) => (a + b));
const sumWithInitValue = scores.reduce((a, b) => (a + b), 11);
console.log(sum);
console.log(sumWithInitValue);