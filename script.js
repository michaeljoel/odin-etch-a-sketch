function generateGrid() {
  const gridContainer = document.querySelector(".grid-container");
  for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridContainer.appendChild(gridRow);
    for (let x = 0; x < 16; x++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add('grid-col');
        gridRow.appendChild(gridColumn);

        const gridItem = document.createElement("div");
        gridItem.classList.add(`grid-item`);
        gridColumn.appendChild(gridItem);
    }
  }
}

generateGrid();
