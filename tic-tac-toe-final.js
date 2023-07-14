(function(){

    const players = () => {
        let player1 = 'X';
        let player2 = 'O';

        return {player1, player2}
    }

    const initialConditions = () => {
        let movesX = [];
        let movesO = [];
        let scoreX = 0;
        let scoreO = 0;
        let tied = 0;
        let turns = 0;

        return {movesX, movesO, scoreX, scoreO, tied, turns}
    }

    const cacheDom = () => {
        const cell = document.querySelectorAll('.cell');
        const X = document.querySelector('#X');
        const O = document.querySelector('#O');
        const D = document.querySelector('#D');
        const reset = document.querySelector('#reset')

        return {cell, X, O, D, reset}
    }

    const bindEvents = () => {
        cell.forEach(cell => cell.addEventListener('click', addSymbol));
        reset.addEventListener('click', resetGame)
    }

})();