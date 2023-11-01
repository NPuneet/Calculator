const input = document.querySelector("#input");
const number7 = document
  .querySelector("#number7")
  .addEventListener("click", () => (input.value += 7));
const number8 = document
  .querySelector("#number8")
  .addEventListener("click", () => (input.value += 8));
const number9 = document
  .querySelector("#number9")
  .addEventListener("click", () => (input.value += 9));
const Delete = document
  .querySelector("#delete")
  .addEventListener("click", () => {
    const value = input.value;
    input.value = value.slice(0, -1);
  });
const number4 = document
  .querySelector("#number4")
  .addEventListener("click", () => (input.value += 4));
const number5 = document
  .querySelector("#number5")
  .addEventListener("click", () => (input.value += 5));
const number6 = document
  .querySelector("#number6")
  .addEventListener("click", () => (input.value += 6));
const operatorPlus = document
  .querySelector("#operatorPlus")
  .addEventListener("click", () => {
    input.value > 0 ? (input.value += "+") : (input.value = "");
  });
const number1 = document
  .querySelector("#number1")
  .addEventListener("click", () => (input.value += 1));
const number2 = document
  .querySelector("#number2")
  .addEventListener("click", () => (input.value += 2));
const number3 = document
  .querySelector("#number3")
  .addEventListener("click", () => (input.value += 3));
const operatorMinus = document
  .querySelector("#operatorMinus")
  .addEventListener("click", () => (input.value += "-"));
const decimal = document
  .querySelector("#decimal")
  .addEventListener("click", () => (input.value += "."));
const number0 = document
  .querySelector("#number0")
  .addEventListener("click", () => (input.value += 0));
const operatorDivide = document
  .querySelector("#operatorDivide")
  .addEventListener("click", () => {
    input.value > 0 ? (input.value += "/") : (input.value = "");
  });
const operatorMul = document
  .querySelector("#operatorMul")
  .addEventListener("click", () => {
    input.value > 0 ? (input.value += "*") : (input.value = "");
  });
const reset = document
  .querySelector("#reset")
  .addEventListener("click", () => (input.value = ""));
  const decimalPlaces = (number) =>{
    return number ;
  }
const equals = document
  .querySelector("#equals")
  .addEventListener("click", () => {
    const expression = input.value;
    try {
      const result = eval(expression);
      if (typeof result === "number" && isFinite(result)) {
        input.value = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
      } else {
        input.value = "Error";
      }
    } catch (error) {
      input.value = "Error";
    }
  });
