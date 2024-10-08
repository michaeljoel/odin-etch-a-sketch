function generateGrid(row = 16, col = 16) {
  const gridContainer = document.querySelector(".grid-container");
  for (let i = 0; i < row; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridContainer.appendChild(gridRow);
    for (let x = 0; x < col; x++) {
      const gridColumn = document.createElement("div");
      gridColumn.classList.add("grid-col");
      gridRow.appendChild(gridColumn);

      const gridItem = document.createElement("div");
      gridItem.classList.add(`grid-item`);
      gridColumn.appendChild(gridItem);
    }
  }
}

generateGrid();

function highlightGridItems() {
  const gridItems = document.getElementsByClassName("grid-item");
  console.log(gridItems.length);
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].onmouseenter = () => {
      gridItems[i].style.backgroundColor = "red";
    };
    gridItems[i].onmouseleave = () => {
      gridItems[i].style.backgroundColor = "grey";
    };
  }
}

highlightGridItems();

function newGrid() {
  const rows = prompt("How many rows?");
  const cols = prompt("How many columns?");

  if (rows > 100 || cols > 100) {
    alert("Can be no greater than 100.");
    return;
  }

  const oldGridContainer = document.querySelector(".grid-container");
  oldGridContainer.remove();
  const newGridContainer = document.createElement("div");
  newGridContainer.classList.add("grid-container");
  document.body.append(newGridContainer);

  generateGrid(rows, cols);
  highlightGridItems();
}
