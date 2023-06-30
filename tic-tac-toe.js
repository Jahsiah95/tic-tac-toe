//Select DOM elements (cells, buttons)
//Logic for switching between 'x' and 'o'/player 1 and 2
//Logic for ending game
//Render selections

let movesX = [];
let movesO = [];
let scoreX = 0;
let scoreO = 0;
let tied = 0;
let P1 = 'X';
let P2 = 'O';
let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let turns = 0;

const cell = document.querySelectorAll('.cell');
const X = document.querySelector('#X');
const Y = document.querySelector('#Y');
const D = document.querySelector('#D');
const reset = document.querySelector('#reset')

cell.forEach(cell => cell.addEventListener('click', addSymbol));
X.textContent = `X: ${scoreX}`;
O.textContent = `O: ${scoreO}`;
D.textContent = `D: ${tied}`;
reset.addEventListener('click', resetGame)


function addSymbol(e){
    if(e.target.textContent !== ''){
        alert('Oops! This cell appears to be taken.');

    }else if(turns%2 == 0){
        e.target.textContent = P1;
        movesX.push(Number(e.target.getAttribute('id')));
        filterX();

    }else if(turns%2 !== 0){
        e.target.textContent = P2;
        movesO.push(Number(e.target.getAttribute('id')));
        filterO();
    }
}

function filterX(){
    turns++

    if(turns == 9){
        alert("It's a tie")
        tied++
        D.textContent = `D: ${tied}`;
        clearBoard();

    } else{
        for(let i = 0; i < winningCombos.length; i++){

            let combosX = movesX.filter(cellNumber => winningCombos[i].includes(cellNumber))
    
            if(combosX.sort().join("") === winningCombos[i].join("")){
                alert("Game Over")
                scoreX++
                X.textContent = `X: ${scoreX}`;
                clearBoard();
            }
        };
    }
};

function filterO(){
    turns++

    if(turns == 9){
        alert("It's a tie!")
        tied++
        D.textContent = `D: ${tied}`;
        clearBoard();

    } else{
        for(let i = 0; i < winningCombos.length; i++){

            let combosO = movesO.filter(cellNumber => winningCombos[i].includes(cellNumber))
    
            if(combosO.sort().join("") === winningCombos[i].join("")){
                alert("Game Over")
                scoreO++
                O.textContent = `O: ${scoreO}`
                clearBoard();
            }
        };
    }
};

function clearBoard(){
    cell.forEach(cell => cell.textContent = "");
    movesX = [];
    movesO = [];
    turns = 0;
}

function resetGame(){
    location.reload()
}



