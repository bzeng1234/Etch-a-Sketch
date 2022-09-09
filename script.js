addEvent();

let changeGridButton = document.querySelector(".change-grid-button");

changeGridButton.addEventListener('click', (e) => {
    let numOfSquare = prompt("Please enter a number of squares per side between 1-100",);

    while (numOfSquare == null || numOfSquare === "" || isNaN(numOfSquare) || parseInt(numOfSquare) <= 0 || parseInt(numOfSquare) > 100) {
        numOfSquare = prompt("Please enter a valid number between 1-100");
    }

    // reset the grid to it's original condition
    resetGrid();

    let gridSize = document.querySelectorAll('.row').length;

    // check if we need to increase or decrease original grid
    if (numOfSquare > gridSize)
        increaseGridSize(numOfSquare, gridSize);
    else if (numOfSquare < gridSize)
        decreaseGridSize(numOfSquare, gridSize);
    
    addEvent();
})

function addEvent() {
    let columnBlockArr = Array.from(document.querySelectorAll(".column"));

    columnBlockArr.forEach((column) => {
        column.addEventListener('mouseover', (e) => {
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
    });
}

function resetGrid() {
    let rowNodeList = document.querySelectorAll("div.row");
    rowNodeList.forEach((row) => {
        let columnNodeList = row.children;
        for (let columnBlock of columnNodeList) {
            columnBlock.style.backgroundColor = 'lightgray';
        }
    });
}

function increaseGridSize(desiredSize, originalSize) {
    if (desiredSize <= originalSize) {
        alert("desired size is less than original size");
    }

    // add row elements to parent grid-container

    let gridContainer = document.querySelector('.grid-container');
    let gridContainerChildrenList = gridContainer.children;

    while (gridContainerChildrenList.length < desiredSize) {
        let newNode = document.createElement('div');
        newNode.classList.add("row");
        gridContainer.appendChild(newNode);
    }

    let rowNodeList = document.querySelectorAll('.row');

    // add column blocks in current row blocks
    for (let rowNode of rowNodeList) {
        while (rowNode.children.length < desiredSize) {
            let newNode = document.createElement('div');
            newNode.classList.add("column");
            newNode.style.backgroundColor = 'lightgray';
    
            rowNode.appendChild(newNode);
        }
    }
}

function decreaseGridSize(desiredSize, originalSize) {
    if (desiredSize >= originalSize) {
        alert("desired size is larger than original size");
    }

    // remove row elements from parent grid-container

    let gridContainer = document.querySelector('.grid-container');
    let gridContainerChildrenList = gridContainer.children;

    while (gridContainerChildrenList.length > desiredSize) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
    
    // remove column elements from parent row elements

    let rowNodeList = document.querySelectorAll('.row');

    for (let rowNode of rowNodeList) {
        while (rowNode.children.length > desiredSize) {
            let newNode = document.createElement('div');
            newNode.classList.add("column");
            newNode.style.backgroundColor = 'lightgray';
    
            rowNode.removeChild(rowNode.lastElementChild);
        }
    }
    
}