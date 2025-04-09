// Constructors
const gridContainer = document.querySelector('#gridContainer');
const sizeButton = document.querySelector('#chooseSize');
const startOver = document.querySelector('#resetGrid');
const pageColor = document.querySelector('#darkMode');

// Page Variables
let isDarkMode = false;

// Event Listeners
gridContainer.addEventListener('mouseover', changeColor);
sizeButton.addEventListener('click', getCanvasSize);
pageColor.addEventListener('click', changePageTheme);

// Get Number of divs to generate via user input via prompt popup
function getCanvasSize() {
    var canvasSize = prompt("How large should the canvas be?");
    Number(canvasSize);
    if (canvasSize > 100) {
        alert('Too large, must be a number between 1 - 100!');
    } else {
        generateGrid(canvasSize);
    }
}

function changePageTheme() {
    let page = document.querySelector('#page');
    let body = document.querySelector('body');
    let buttons = document.querySelector('#darkMode');
    let canvas = document.querySelector('#chooseSize');
    if (isDarkMode) {
        page.style.backgroundColor = "teal";
        body.style.backgroundColor = "teal";
        canvas.style.backgroundColor = "white";
        canvas.style.color = "black";
        buttons.style.backgroundColor = "white";
        buttons.style.color = "black";
        buttons.textContent = "Dark Mode";
        isDarkMode = false;
    } else {
        page.style.backgroundColor = "black";
        body.style.backgroundColor = "black";
        canvas.style.backgroundColor = "teal";
        canvas.style.color = "white";
        buttons.style.backgroundColor = "teal";
        buttons.style.color = "white";
        buttons.textContent = "Light Mode";
        isDarkMode = true;
    }
}

function generateGrid(num) {
    // Generate Columns
    gridContainer.replaceChildren();
    for (let y=0; y < num; y++) {
        let column = document.createElement('div');
        column.className = 'column';
        // Generate Rows
        for (let x=0; x < num; x++) {
            let row = document.createElement('row');
            row.className = 'row';
            row.id = x + ',' + y;
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }
}
generateGrid(16);

// Hovering over a div changes its color to black
function changeColor(event) {
    if (event.target.className == 'row') {
        event.target.style.backgroundColor = "white";
    }
}