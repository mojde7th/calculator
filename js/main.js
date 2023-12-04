//debugger;
let x = +prompt("x...!");
let y = +prompt("y...!");
let operator = prompt("+,-,*,/,%,**");
if (operator === "+") {
  document.write(
    `<h1 style="width: 30%; text-align: center; margin: 100px auto; background-color:#2b2b2b;color:white;padding:30px">result is ${
      x + y
    }</h1>`
  );
} else if (operator === "-") {
  document.write(
    `<h1 style="width: 30%; text-align: center; margin: 100px auto; background-color:#2b2b2b;color:white;padding:30px">result is ${
      x - y
    }</h1>`
  );
} else if (operator === "*") {
  document.write(
    `<h1 style="width: 30%; text-align: center; margin: 100px auto; background-color:#2b2b2b;color:white;padding:30px">result is ${
      x * y
    }</h1>`
  );
} else if (operator === "/") {
  document.write(
    `<h1 style="width: 30%; text-align: center; margin: 100px auto; background-color:#2b2b2b;color:white;padding:30px">result is ${
      x / y
    }</h1>`
  );
} else if (operator === "%") {
  document.write(
    `<h1 style="width: 30%; text-align: center; margin: 100px auto; background-color:#2b2b2b;color:white;padding:30px">result is ${
      x % y
    }</h1>`
  );
} else if (operator === "**") {
  document.write(
    `<h1 style="width: 30%; text-align: center; margin: 100px auto; background-color:#2b2b2b;color:white;padding:30px">result is ${
      x ** y
    }</h1>`
  );
}
