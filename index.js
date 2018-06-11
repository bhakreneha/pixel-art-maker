let brush = 'red';
let colors = ['red','crimson','salmon','orangered','orange', 'yellow','lemonchiffon','green', 'lime','greenyellow','blue','deepskyblue','lightskyblue','purple','mediumslateblue' , 'brown', 'gray','darkgray','black','dimgray', 'white','snow'];

const divApp = document.createElement('div');
divApp.className = 'outer';
document.body.appendChild(divApp);

const divCanvas = document.createElement('div');
divCanvas.className = 'inner';
divApp.appendChild(divCanvas);

for (let y=0; y<36; y++){
    const row = document.createElement('div');
    row.className = 'row';
     for (let x=0; x<74; x++) {
        let col = document.createElement('div');
        col.className = 'column';
        col.addEventListener('click', () => {
            col.style.backgroundColor = brush;
        });
        row.appendChild(col);
    }
    divCanvas.appendChild(row);
}

const colorPalette = document.createElement('div');
colorPalette.className = 'palette';
divApp.appendChild(colorPalette);

for (let c=0; c<colors.length; c++) {
    let color = document.createElement('div');
    color.className = 'circle';
    color.style.backgroundColor = colors[c];
    color.addEventListener('click', () => {
        brush = colors[c];
    });
    colorPalette.appendChild(color);
}
