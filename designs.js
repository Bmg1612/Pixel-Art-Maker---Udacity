const size = document.querySelector('#sizePicker');
//Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    //Then runs the function
    size.addEventListener('submit', function (e) {
        /*
        Prevent the default wich would be
        sending the form and changing the URL
        */
        e.preventDefault();
        //Calls the function
        makeGrid();
    });
});

function makeGrid() {
    const gridHeight = document.querySelector('#inputHeight').value;
    const gridWidth = document.querySelector('#inputWidth').value;
    const color = document.querySelector('#colorPicker');
    const canvas = document.querySelector('#pixelCanvas');
    /*
    Resets the canvas and the color of its cells
    every time the 'submit' button is clicked
    */ 
    canvas.innerHTML = null;
    canvas.style.backgroundColor = null;
    /*
    Looping the number input of the user
    generating the desirable height and width 
    */
    for (let h = 0; h < gridHeight; h++) {
        let row = canvas.insertRow(h);
        //After the rows are created, then the cells are made
        for (let w = 0; w < gridWidth; w++) {
            let cell = row.insertCell(w);
        };

    }
    //Painting the grid that the user clicks(target)
    canvas.addEventListener('click', function (e) {
        e.target.style.backgroundColor = color.value;
    });

}
