const container = document.querySelector('.grid');

function createGrid(x, y) {
    container.style.setProperty('--grid-rows', x);
    container.style.setProperty('--grid-cols', y);
    for (let i = 0; i < (x * y); i++){
        const cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

createGrid(16,16);

const items = document.getElementsByClassName('grid-item');

for (const item of items) {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black';
    })
}