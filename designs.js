const size = document.querySelector('#sizePicker');

document.addEventListener('DOMContentLoaded', function () {
    size.addEventListener('submit', function (e) {
        e.preventDefault();
        makeGrid();
    });
});

function makeGrid() {
    const gridHeight = document.querySelector('#inputHeight').value;
    const gridWidth = document.querySelector('#inputWidth').value;
    const color = document.querySelector('#colorPicker');
    const canvas = document.querySelector('#pixelCanvas');
    // h because of height
    canvas.innerHTML = null;
    canvas.style.backgroundColor = null;
    for (let h = 0; h < gridHeight; h++) {
        let row = canvas.insertRow(h);

        // w because of width
        for (let w = 0; w < gridWidth; w++) {
            /*
            I was in doubt about assing this value to a variable, 
            but i thought maybe it was a good practice.
            */
            let cell = row.insertCell(w);
        };

    };
    color.addEventListener('click', function (e) {
        canvas.style.backgroundColor = color.value;
    });

    canvas.addEventListener('click', function (e) {
        e.target.style.backgroundColor = color.value;
    });

}
