function getCounterValue() {
  const counterSpan = document.getElementById("counter");
  const value = parseInt(counterSpan.textContent, 10);
  return Number.isNaN(value) ? 0 : value;
}

function setCounterValue(newValue) {
  document.getElementById("counter").textContent = String(newValue);
}

function tickUp() {
  setCounterValue(getCounterValue() + 1);
}

function tickDown() {
  setCounterValue(getCounterValue() - 1);
}

function runForLoop() {
  const n = getCounterValue();
  let output = "";
  for (let i = 0; i <= n; i++) {
    output += (i === 0 ? "" : " ") + i;
  }
  document.getElementById("forLoopResult").textContent = output;
}

function showOddNumbers() {
  const n = getCounterValue();
  let output = "";
  let first = true;

  for (let i = 1; i <= n; i += 2) {
    output += (first ? "" : " ") + i;
    first = false;
  }

  document.getElementById("oddNumberResult").textContent = output;
}

function addMultiplesToArray() {
  const n = getCounterValue();
  const arr = [];

  if (n >= 5) {
    for (let i = Math.floor(n / 5) * 5; i >= 5; i -= 5) {
      arr.push(i);
    }
  }

  console.log(arr);
}

function printCarObject() {
  const carType = document.getElementById("carType").value;
  const carMPG = document.getElementById("carMPG").value;
  const carColor = document.getElementById("carColor").value;

  const carObj = { cType: carType, cMPG: carMPG, cColor: carColor };
  console.log(carObj);
}

function loadCar(whichCar) {
  console.log("loadCar clicked:", whichCar);

  const src = window["carObject" + whichCar];
  console.log("src object:", src);

  if (!src) return;

  document.getElementById("carType").value = src.cType;
  document.getElementById("carMPG").value = src.cMPG;
  document.getElementById("carColor").value = src.cColor;
}




function changeColor(whichColor) {
  const p = document.getElementById("styleParagraph");

  if (whichColor === 1) p.style.color = "red";
  if (whichColor === 2) p.style.color = "green";
  if (whichColor === 3) p.style.color = "blue";
}
