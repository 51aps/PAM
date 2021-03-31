// Select color input
const cellColour = document.getElementById("colorPicker");
let colour = cellColour.value;

const grid = document.getElementById("pixelCanvas");
grid.addEventListener("click", function(event) {
    // event.preventDefault();
    event.cellColour.style.backgroundColor = cellColour.value
});

// Select size input
const form = document.querySelector("#sizePicker");

//submit form
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var gridHeight = document.getElementById("inputHeight").value;
    var gridWidth = document.getElementById("inputWidth").value;
    makeGrid(gridHeight, gridWidth);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(gridHeight, gridWidth) {

    grid.innerHTML="";
    for (var y = 0; y < gridHeight; y++) {
        let row = document.createElement("tr");
        for (var x = 0; x <gridWidth; x++) {
            let cell = document.createElement("td");
            grid.appendChild(cell);
        grid.appendChild(row);
            };
        };
    };

// paint cells
