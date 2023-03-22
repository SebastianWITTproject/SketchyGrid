
//generate a grid based on number of rows and columns as input 

const board = document.getElementById("board");
const color = document.getElementById("colorselector");
const rb = document.getElementById("rainbowmode");

function makeRows(rows, cols) 
{
  board.style.setProperty('--grid-rows', rows);
  board.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) 
  {
    let cell = document.createElement("div");
    board.appendChild(cell).className = "grid-item";
    cell.addEventListener("mousedown", () => isClicked = true); 
    cell.addEventListener("mousedown", setColor); 
    cell.addEventListener("mouseover", setColor);
  }
}

makeRows(20,20);

//track and take care of chosen input color


let currentColor = "#000000";

function selectColor(event)
{
  currentColor = event.target.value;
}

color.addEventListener("input", selectColor);


// set up the rainbowmode, manage interaction with other modes
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
const normal = document.getElementById("colormode");

let countrainbow = 0;

// stock state variables 

let isClicked = false;
let isRainbow = false;
let isErased = false;
let isDisplayed = false;

rb.addEventListener("click", function() {isRainbow=true; isErased=false; rb.style.backgroundColor = "yellow";
normal.style.backgroundColor = "white"; eraser.style.backgroundColor = "white"});

normal.addEventListener("click", function() {isRainbow=false; isErased=false; rb.style.backgroundColor = "white";
normal.style.backgroundColor = "yellow";eraser.style.backgroundColor = "white"});

// set the color if mouse interaction => color displayed is based on option selected aka normal, raindow or erase.

function setColor(event)
{
  
  if (isClicked == true)
  {
    if (isErased == true)
    {
      return event.target.style.backgroundColor = "transparent"; 
    }
    if (isRainbow ==true)
    {
      event.target.style.backgroundColor = rainbow[countrainbow];
      if (countrainbow <= 5)
      {
        countrainbow++;
      }
      else
      {
        countrainbow = 0;
      }
    }
    
    else 
    {
      event.target.style.backgroundColor = currentColor;
    }
  }
}


// select only the div with a class name to prevent to set bg color on the parent board div 
let elements = board.getElementsByClassName("grid-item");


// if mouse released anywhere so not just on the board  = stops the drawing
document.addEventListener("mouseup", () => isClicked = false);


//manage the eraser 

const eraser = document.getElementById("erase");
eraser.addEventListener("click", function() {isErased =true; isRainbow = false; eraser.style.backgroundColor = "yellow";
rb.style.backgroundColor = "white"; normal.style.backgroundColor = "white"})



//manage the clear button 

function reset ()
{
  for (let i=0; i<elements.length; i++) 
  {
    elements[i].style.backgroundColor = "transparent";   
  }
}

const clear = document.getElementById("clear");
clear.addEventListener("click", reset);

 //grid options manager 

 const small = document.getElementById("small");
 const medium = document.getElementById("medium");
 const large = document.getElementById("large");
 const on = document.getElementById("on");
 const off = document.getElementById("off");

//function to delete the previous grid in order to generate a new one

function deletecurrentGrid()
{
  while (elements.length>0)
   {
    elements[0].remove();
   }
}

// Toggles display on and off
function setDisplayOff()
{
    for (let i=0; i<elements.length; i++) 
    {
      elements[i].style.border = "transparent";   
    }
    isDisplayed = true;
    on.style.backgroundColor = "white";
    off.style.backgroundColor = "yellow";
  }
  function setDisplayOn()
  {
    for (let j=0; j<elements.length; j++) 
    {
      elements[j].style.border= "solid #666666";   
    }
    isDisplayed = false;
    on.style.backgroundColor = "yellow";
    off.style.backgroundColor = "white";
  }


 small.addEventListener("click",function() {setDisplayOn(),deletecurrentGrid(); makeRows(8,8)});
 medium.addEventListener("click",function() {setDisplayOn(),deletecurrentGrid(); makeRows(16,16)});
 large.addEventListener("click",function() {setDisplayOn(),deletecurrentGrid(); makeRows(24,24)});
 on.addEventListener("click", () => setDisplayOn());
 off.addEventListener("click", () => setDisplayOff());





 




