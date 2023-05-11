var numSquares = 6;
var pickedColor;
var colors = []; 
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

function generateRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

// generate 6 random colours 
squares.forEach(function(square){
    randomColor = generateRandomRGB();
    colors.push(randomColor);
    square.style.background = randomColor;
})

// generate picked color for this game round 
const randomIndex = Math.floor(Math.random() * colors.length)
pickedColor = colors[randomIndex]; 


// listen if matching color clicked 
squares.forEach(function(square){
    square.addEventListener('click', function() 
    {
        if(square.style.background === pickedColor){alert('smarty pants');}
        else {alert('ouch try again');}
    }
    )
})


resetButton.addEventListener('click', function(){location.reload();})
