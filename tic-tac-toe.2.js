(function() {
    let game = {

        player1: 'X',
        player2: 'Y',
        winningCombos: [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ],

        load: function(){
            this.initialConditions();
            this.cacheDom();

        },

        initialConditions: function(){
            this.movesX = [];
            this.movesO = [];
            this.scoreX = 0;
            this.scoreO = 0;
            this.tied = 0;
            this.turns = 0;
        },

        cacheDom: function(){
            this.$cell = document.querySelectorAll('.cell');
            this.$scoreX = document.querySelector('#X');
            this.$scoreY = document.querySelector('#Y');
            this.$draw = document.querySelector('#D');
            this.$reset = document.querySelector('#reset')
        },

        addSymbol: function(){

        },

        clearBoard: function(){
            this.$cell.forEach(cell => cell.textContent = "");
            this.movesX = [];
            this.movesO = [];
            this.turns = 0;
        },

        resetGame: function(){
            this.location.reload();
        },

    }

    game.load();
})();
