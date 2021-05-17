const clearDisplay = document.querySelector(".button__clear");

let numOneResult = null;
let numTwoResult = null;
let operatorVal = null;

clearDisplay.addEventListener("click", (event) => {
  calcDisplay.innerHTML = null;
  let numOneResult = null;
  let numTwoResult = null;
  let operatorVal = null;
});

const calcDisplay = document.getElementById("idresult");
const buttonPress = document.querySelectorAll(".numInput");
const operatorPress = document.querySelectorAll(".operator");

const equalPress = document.querySelector(".button__equals");

buttonPress.forEach((number) => {
  number.addEventListener("click", (event) => {
    calcDisplay.innerHTML += number.dataset.numvalue;
  });
});

operatorPress.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    numOneResult = parseInt(calcDisplay.innerHTML);
    calcDisplay.innerHTML = "";
    switch (operator.dataset.bob) {
      case "0":
        operatorVal = 0;
        break;
      case "1":
        operatorVal = 1;
        break;
      case "2":
        operatorVal = 2;
        break;
      case "3":
        operatorVal = 3;
        break;
    }
  });
});

equalPress.addEventListener("click", (event) => {
  numTwoResult = parseInt(calcDisplay.innerHTML);
  console.log(numTwoResult);
  switch (operatorVal) {
    case 0:
      let addResult = numOneResult + numTwoResult;
      calcDisplay.innerHTML = addResult.toString();
      console.log(addResult);
      break;
    case 1:
      let subResult = numOneResult - numTwoResult;
      calcDisplay.innerHTML = subResult.toString();
      console.log(subResult);
      break;
    case 2:
      let timesResult = numOneResult * numTwoResult;
      calcDisplay.innerHTML = timesResult.toString();
      console.log(timesResult);
      break;
    case 3:
      let divResult = numOneResult / numTwoResult;
      calcDisplay.innerHTML = divResult.toString();
      console.log(divResult);
      break;
    default:
      calcDisplay.innerHTML = "ERROR";
  }
});
