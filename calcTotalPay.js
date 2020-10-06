function calcTotalPay(dogWalksArr) {
  return dogWalksArr.reduce((totalHrs, currentWalkHrs) => {
    totalHrs += currentWalkHrs;
    return totalHrs;
  })
}

var dogWalks = [4, 5, 2, 2, 6, 1, 3];
console.log(calcTotalPay(dogWalks));