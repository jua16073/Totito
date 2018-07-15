const state = {
    game : [0, 1, 2],
};

const render = btnState => {

    if ((root.hasChildNodes())){
        root.innerHTML = null;
    }
    const title = document.createElement('h1');
    title.innerHTML = 'TOTITO';
    root.appendChild(title);

    const grid1 = document.createElement('div');
    grid1.className = 'prueba';
    

    const btn1 = document.createElement('button');
    btn1.className = 'botones';
    btn1.innerHTML = 'HAI';
    grid1.appendChild(btn1);

    const btn2 = document.createElement('button');
    btn2.className = 'botones';
    btn2.innerHTML = 'HAI';
    grid1.appendChild(btn2);

    root.appendChild(grid1);
};

render(state);