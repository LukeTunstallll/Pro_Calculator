const clearDisplay = document.querySelector(".button__clear");

clearDisplay.addEventListener("click", (event) => {
  calcDisplay.innerHTML = null;
});

const calcDisplay = document.getElementById("idresult");

const buttonPress = document.querySelectorAll(".numInput");

buttonPress.forEach((number) => {
  number.addEventListener("click", (event) => {
    console.log(event);
    calcDisplay.innerHTML += buttonPress[number];
  });
});

// buttonPress[0].addEventListener("click", (event) => {
//   console.log(event);
//   calcDisplay.innerHTML += 9;
// });

// buttonPress[1].addEventListener("click", (event) => {
//   console.log(event);
//   calcDisplay.innerHTML += 8;
// });

// buttonPress[2].addEventListener("click", (event) => {
//   console.log(event);
//   calcDisplay.innerHTML += 7;
// });

// buttonPress[3].addEventListener("click", (event) => {
//   console.log(event);
//   calcDisplay.innerHTML += 6;
// });

// buttonPress[4].addEventListener("click", (event) => {
//   console.log(event);
//   calcDisplay.innerHTML += 5;
// });

// buttonPress[5].addEventListener("click", (event) => {
//   console.log(event);
//   calcDisplay.innerHTML += 4;
// });

// buttonPress[6].addEventListener("click", (event) => {
//   console.log(event);
//   calcDisplay.innerHTML += 3;
// });

// buttonPress[7].addEventListener("click", (event) => {
//   console.log(event);
//   calcDisplay.innerHTML += 2;
// });

// buttonPress[8].addEventListener("click", (event) => {
//   console.log(event);
//   calcDisplay.innerHTML += 1;
// });

// buttonPress[9].addEventListener("click", (event) => {
//   console.log(event);
//   calcDisplay.innerHTML += 0;
// });
