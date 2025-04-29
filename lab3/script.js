
function task1() {
    let sum = 0;
    let i = 1;
  
    while (i <= 50) {
      sum += i;
      i++;
    }
  
    console.log("Task 1: Sum of the first 50 natural numbers:", sum);
  }
  
  task1();
  function task2() {
    function factorial(n) {
      if (n === 0) {
        return 1;
      }
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  
    let number = parseInt(prompt("Enter a number to calculate its factorial:"));
    if (!isNaN(number) && number >= 0) {
      console.log(`Task 2: Factorial of ${number}:`, factorial(number));
    } else {
      console.log("Task 2: Please enter a valid non-negative number.");
    }
  }
  
  task2();
  function task3() {
    let monthNumber = parseInt(prompt("Enter the month number (1-12):"));
  
    switch (monthNumber) {
      case 1:
        console.log("Task 3: January");
        break;
      case 2:
        console.log("Task 3: February");
        break;
      case 3:
        console.log("Task 3: March");
        break;
      case 4:
        console.log("Task 3: April");
        break;
      case 5:
        console.log("Task 3: May");
        break;
      case 6:
        console.log("Task 3: June");
        break;
      case 7:
        console.log("Task 3: July");
        break;
      case 8:
        console.log("Task 3: August");
        break;
      case 9:
        console.log("Task 3: September");
        break;
      case 10:
        console.log("Task 3: October");
        break;
      case 11:
        console.log("Task 3: November");
        break;
      case 12:
        console.log("Task 3: December");
        break;
      default:
        console.log("Task 3: Invalid month number.");
    }
  }
  
  task3();
  function task4() {
    function sumOfEvenNumbers(arr) {
      let sum = 0;
      for (let num of arr) {
        if (num % 2 === 0) {
          sum += num;
        }
      }
      return sum;
    }
  
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Task 4: Sum of even numbers:", sumOfEvenNumbers(numbers));
  }
  
  task4();  
  function task5() {
    const countVowels = (str) => {
      const vowels = "aeiouAEIOU";
      let count = 0;
      for (let char of str) {
        if (vowels.includes(char)) {
          count++;
        }
      }
      return count;
    };
  
    let text = prompt("Enter a string:");
    console.log("Task 5: Number of vowels:", countVowels(text));
  }
  
  task5();
    function task6() {
    function power(base, exponent) {
      return Math.pow(base, exponent);
    }
  
    let baseNumber = parseFloat(prompt("Enter the base:"));
    let expNumber = parseInt(prompt("Enter the exponent:"));
    if (!isNaN(baseNumber) && !isNaN(expNumber)) {
      console.log(
        `Task 6: ${baseNumber} raised to the power of ${expNumber}:`,
        power(baseNumber, expNumber)
      );
    } else {
      console.log("Task 6: Please enter valid numbers.");
    }
  }
  
  task6();