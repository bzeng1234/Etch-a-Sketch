let columnBlockArr = Array.from(document.querySelectorAll(".column"));

columnBlockArr.forEach((column) => {
    column.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'red';
});
});

let changeGridButton = document.querySelector(".change-grid-button");

changeGridButton.addEventListener('click', (e) => {
    let numOfSquare = prompt("Please enter a number of squares per side greater than 0",);

    while (numOfSquare == null || numOfSquare === "" || isNaN(numOfSquare) || parseInt(numOfSquare) <= 0) {
        numOfSquare = prompt("Please enter a valid number");
    }

    resetGrid();
})

function resetGrid() {
    let rowNodeList = document.querySelectorAll("div.row");
    rowNodeList.forEach((row) => {
        let columnNodeList = row.children;
        for (let columnBlock of columnNodeList) {
            columnBlock.style.backgroundColor = 'lightgray';
        }
    });
}