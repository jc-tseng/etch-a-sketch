function createGrid(x) {
    const container = document.querySelector('.grid');
    const cells = container.querySelectorAll('div');
    cells.forEach((div) => div.remove());
    container.style.setProperty('--grid-rows', x);
    container.style.setProperty('--grid-cols', x);

    for (let i = 0; i < (x * x); i++){
        const cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        })
    }
}

createGrid(16);

const items = document.getElementsByClassName('grid-item');

const set_grid = document.querySelector('.set-grid');

set_grid.addEventListener('click', () => {
    input = prompt('Enter number of squares per side of grid (max 100):');
    while (input !== null && (isNaN(input) || !(input >= 1 && input <= 100))) {
        input = prompt('Enter number of squares per side of grid (max 100):');
    }
    createGrid(input);
})