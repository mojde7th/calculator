debugger;
let x = +prompt("x...!");
let y = +prompt("y...!");
let operator = prompt("+,-,*,/,%,**");
if (operator === "+") {
  console.log(`result is ${x + y}`);
} else if (operator === "-") {
  console.log(`result is ${x - y}`);
} else if (operator === "*") {
  console.log(`result is ${x * y}`);
} else if (operator === "/") {
  console.log(`result is ${x / y}`);
} else if (operator === "%") {
  console.log(`result is ${x % y}`);
} else if (operator === "**") {
  console.log(`result is ${x ** y}`);
}
