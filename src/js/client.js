const state = {
    game : [2,2,2,2,2,2,2,2,2],
    turno : 0,
};

const render = btnState => {

    if ((root.hasChildNodes())){
        root.innerHTML = null;
    }
    const title = document.createElement('h1');
    title.innerHTML = 'TOTITO';
    root.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'grid';
    root.appendChild(grid);

    const row1 = document.createElement('div');
    row1.className = 'row';
    grid.appendChild(row1);

    const row2 = document.createElement('div');
    row2.className = 'row';
    grid.appendChild(row2);

    const row3 = document.createElement('div');
    row3.className = 'row';
    grid.appendChild(row3);

    const redo = document.createElement('button');
    redo.className = 'redo';
    redo.innerHTML = 'REINICIO';
    root.appendChild(redo);
    
    let id = 0;
    const btns = btnState.game.map(
        (position, i) => {
            const btn = document.createElement('button');
            btn.className = 'btns';
            btn.id = id;

            if (position === 1){
                btn.classList.add('pressedx');
                btn.innerHTML = '<img src = "assets/X.png" disabled>';
            }

            if (position === 0){
                btn.classList.add('pressedo');
                btn.innerHTML = '<img src = "assets/O.png">';
            }

            id++;

            btn.onclick = (self) => {
                btnState.game[btn.id]= (btnState.turno + 1) % 2;
                btnState.turno = (btnState.turno + 1) % 2;
                render(btnState);
            };
            
            return btn;
        }
    );

    let x = 0;
    btns.forEach(
        btn => {
            if (x<3){
                row1.appendChild(btn);
            }
            else if(x<6){
                row2.appendChild(btn);
            }
            else if (x<9){
                row3.appendChild(btn);
            }
            x++;
            }
    );

    redo.onclick = () => {
        btnState.game = [2,2,2,2,2,2,2,2,2];
        render(btnState);
    }
};

render(state);