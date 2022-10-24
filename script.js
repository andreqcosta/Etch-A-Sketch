const body = document.querySelector("body");
    

const newGrid = document.querySelector(".new-grid");
newGrid.addEventListener('click', reset);

function reset(e) {
    const container = document.querySelector(".container");
    container.remove();
    let size = prompt("Insert the size of the grid");
    createGrid(size, createContainer());
}

function createContainer(){
    const container = document.createElement("div");
    container.classList.add("container");
    body.appendChild(container);
    return container;
}

function changeColor(e){
    this.classList.add("hover");
}

function createGrid(size, container){
    for (let i = 0; i < size; i++){
	const row = document.createElement("div");
	row.classList.add("row");
	container.appendChild(row);

	for(let j = 0; j < size; j++){
	    const column = document.createElement("div");
	    column.classList.add("column");
	    row.appendChild(column);
	    column.addEventListener("mouseover", changeColor);
	}
    }
}

createGrid(16, createContainer());
