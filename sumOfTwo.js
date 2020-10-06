function sumOfTwo(numbers) {
  return numbers.sort((a, b) => a - b)
    .filter(num => num >= 0)
    .slice(0,2)
    .reduce((sum, num) => sum += num);
}

console.log(sumOfTwo([-1, 19, 5, 42, 2, 77]));