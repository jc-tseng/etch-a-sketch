const container = document.querySelector('.container');

function createGrid(x, y) {
    container.style.setProperty('--grid-rows', x);
    container.style.setProperty('--grid-cols', y);
    for (let i = 0; i < (x * y); i++){
        const cell = document.createElement('div');
        cell.innerText = i;
        container.appendChild(cell).className = 'grid-item';
    }
}

createGrid(16,16);