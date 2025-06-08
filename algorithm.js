const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function miniMaxSum(arr) {
  const total = arr.reduce((sum, num) => sum + num, 0);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const even = arr.filter(num => num % 2 === 0);
  const odd = arr.filter(num => num % 2 !== 0);

  const minSum = total - max;
  const maxSum = total - min;

  console.log("Array:", arr.join(" "));
  console.log("Total:", total);
  console.log("Min of array:", min);
  console.log("Max of array:", max);
  console.log("Even number of array:", even.join(" ") || "Has no even number");
  console.log("Odd number of array:", odd.join(" ") || "Has no odd number");
  console.log(`Mini-Max Sum: ${minSum} ${maxSum}`);
}

function promptInput() {
  rl.question("Enter 5 positive integers separated by spaces: ", (input) => {
    const numbers = input
      .trim()
      .split(" ")
      .map(str => parseInt(str))
      .filter(num => !isNaN(num) && num > 0);

    if (numbers.length !== 5) {
      console.log("Your operation was incorrect, please re-enter.");
      promptInput();
    } else {
      miniMaxSum(numbers);
      rl.close();
    }
  });
}

promptInput();
