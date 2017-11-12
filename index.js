// Code your solutions in this file
function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }
  return arr;
}

function coinToss() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let counter = 0;
  while (coinToss()) {
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}
