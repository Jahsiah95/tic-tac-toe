let game = (function(){

    let movesX = [];
    let movesO = [];
    let scoreX = 0;
    let scoreO = 0;
    let tied = 0;
    let player1 = 'X';
    let player2 = 'O';
    let turns = 0;
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

    //cacheDom
    const cell = document.querySelectorAll('.cell');
    const X = document.querySelector('#X');
    const O = document.querySelector('#O');
    const D = document.querySelector('#D');
    const reset = document.querySelector('#reset')

    //bindEvents
    cell.forEach(cell => cell.addEventListener('click', addSymbol));
    reset.addEventListener('click', resetGame)

    //addSymbol
    function addSymbol(e){
        if(e.target.textContent !== ''){
            // Do nothing
    
        }else if(turns%2 == 0){
            e.target.textContent = player1;
            movesX.push(Number(e.target.getAttribute('id')));
            filterX();
    
        }else if(turns%2 !== 0){
            e.target.textContent = player2;
            movesO.push(Number(e.target.getAttribute('id')));
            filterO();
        }
    };

    //filterX
    function filterX(){
        turns++
    
        for(let i = 0; i < winningCombos.length; i++){
    
            let combosX = movesX.filter(cellNumber => winningCombos[i].includes(cellNumber))
    
            if(combosX.sort().join("") === winningCombos[i].join("")){
                alert("Game Over")
                scoreX++
                dashboard();
                clearBoard();
            }
        };
    }

    //filterO
    function filterO(){
        turns++
    
        for(let i = 0; i < winningCombos.length; i++){
    
            let combosO = movesO.filter(cellNumber => winningCombos[i].includes(cellNumber))
    
            if(combosO.sort().join("") === winningCombos[i].join("")){
                alert("Game Over")
                scoreO++
                dashboard();
                clearBoard();
            }
        };
    }

    //checkTie
    function checkTie(){
        if(turns == 9){
            alert("It's a tie!")
            tied++
            dashboard();
            clearBoard();
        }
    }

    //dashboard
    function dashboard(){
        X.textContent = `X: ${scoreX}`;
        O.textContent = `O: ${scoreO}`;
        D.textContent = `D: ${tied}`;
    };
    dashboard();

    //clearBoard
    function clearBoard(){
        cell.forEach(cell => cell.textContent = "");
        movesX = [];
        movesO = [];
        turns = 0;
    };

    //resetGame
    function resetGame(){
        location.reload();
    }

    //revealed objects
    return {
        clearBoard: clearBoard,
        resetGame: resetGame
    }

})();