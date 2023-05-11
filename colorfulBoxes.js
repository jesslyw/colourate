var numSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var messageDisplay = document.querySelector("#message");

// get page background colour
var bodyElement = document.querySelector("body");
var computedStyle = getComputedStyle(bodyElement);
var backgroundColor = computedStyle.backgroundColor;

init();

function init() {
  setupMode(); //selected mode and num of squares
  run();
  resetSquares();
}

function setupMode() {
  for (i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      messageDisplay.style.textContent = "";
      for (i = 0; i < modeButtons.length; i++) {
        modeButtons[i].classList.remove("selected");
      }
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      resetSquares();
    });
  }
}

function generateRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function pickRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const clickedIndexes = [];

function run() {
  for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.background;
      if (clickedColor == pickedColor) {
        messageDisplay.textContent = "Take a shot, smarty pants";
        squares.forEach(function (square) {
          if (clickedColor != backgroundColor) {
            square.style.background = pickedColor;
          }
        });
      } else {
        messageDisplay.textContent = "Nope!";
        this.style.background = backgroundColor;
      }
    }); //listener
  }
} //function()

// generate colors based on mode chosen
function generateThisManyRandomColors(n) {
  var arr = [];
  for (i = 0; i < n; i++) {
    randomColor = generateRandomRGB();
    arr.push(randomColor);
  }
  return arr;
}

function resetSquares() {
  colors = generateThisManyRandomColors(numSquares);
  pickedColor = pickRandomColor();

  messageDisplay.textContent = "";

  for (i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", function () {
  resetSquares();
});
