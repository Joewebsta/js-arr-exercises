function bestClient(hourlyPayArr) {
  let highestRate = hourlyPayArr[0];

  for (rate of hourlyPayArr) {
    if (rate > highestRate) highestRate = rate;
  }

  return highestRate;
}

var hourlyPay = [22, 17, 29, 16, 18]
console.log(bestClient(hourlyPay));