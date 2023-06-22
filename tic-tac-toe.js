//Select interactive elements (gameboard, cells, )
let arr = []

const cell = document.querySelectorAll('.cell')
cell.forEach(cell => cell.addEventListener('click', addSymbol))
// cell.forEach(cell => cell.addEventListener('click', setID))

function getID(){
    arr = [];
    cell.forEach(cell => {
        let id = cell.getAttribute('id')
        arr.push(id);
        });
    console.log(arr)
};

function addSymbol(e, cell){
    e.target.textContent = 'X';
    e.target.setAttribute('id','X')
    getID()
};


//Logic for switching between 'x' and 'o', assigned to player 1 and 2



//Render selections

