// Generate baseline grid, 16x16
    // function for generating divs defaults to 16x16

// Get Number of divs to generate via user input via popup from button click
    // Track mouse event for clicking button
    // When pressed, fire browser popup window
    // Limit to 100 as maximum, if > 100, error
    //

// Clear current grid
    //Reset grid back to 16x16 default

// Generate new grid based off of user input
    // Create number of columns based off user input
    // For each column, add same number of rows to each column
const gridContainer = document.querySelector('#gridContainer');
gridContainer.addEventListener('mouseover', changeColor);

function generateGrid(num) {
    // Constructors
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
generateGrid(50);

// Hovering over a div changes its color to black
function changeColor(event) {
    if (event.target.className == 'row') {
        event.target.style.backgroundColor = "blue";
    }
}