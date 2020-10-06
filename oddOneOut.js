function oddOneOut(numbers) {
  let filteredEven = numbers.filter(num => num % 2 === 0);

  if (filteredEven.length === 1) return filteredEven[0];
  
  return numbers.filter(num => num % 2 === 1)[0];
}

console.log(oddOneOut([1, 3, 5, 6]));
console.log(oddOneOut([10, 15, 20, 30, 40, 50]));
console.log(oddOneOut([19, 5, 42, 1, 77]));
