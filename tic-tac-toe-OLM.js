(function() {
    let game = {

        player1: 'X',
        player2: 'O',
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
            this.bindEvents();
            this.dashboard();
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
            this.$scoreO = document.querySelector('#O');
            this.$draw = document.querySelector('#D');
            this.$reset = document.querySelector('#reset')
        },

        bindEvents: function(){
            this.$cell.forEach(cell => cell.addEventListener('click', this.addSymbol.bind(this)));
            this.$reset.addEventListener('click', this.resetGame.bind(this));
        },

        addSymbol: function(e){
            if(e.target.textContent !== ''){
                // Do nothing
        
            }else if(this.turns%2 == 0){
                e.target.textContent = this.player1;
                this.movesX.push(Number(e.target.getAttribute('id')));
                this.filterX();
        
            }else if(this.turns%2 !== 0){
                e.target.textContent = this.player2;
                this.movesO.push(Number(e.target.getAttribute('id')));
                this.filterO();
            }
        },

        filterX: function(){
            this.turns++

            for(let i = 0; i < this.winningCombos.length; i++){
        
                let combosX = this.movesX.filter(cellNumber => this.winningCombos[i].includes(cellNumber))
        
                if(combosX.sort().join("") === this.winningCombos[i].join("")){
                    alert("Game Over!")
                    this.scoreX++
                    this.dashboard();
                    this.clearBoard();
                }
            };

            this.checkTie();
        },

        filterO: function(){
            this.turns++

            for(let i = 0; i < this.winningCombos.length; i++){
        
                let combosO = this.movesO.filter(cellNumber => this.winningCombos[i].includes(cellNumber))
        
                if(combosO.sort().join("") === this.winningCombos[i].join("")){
                    alert("Game Over!")
                    this.scoreO++
                    this.dashboard();
                    this.clearBoard();
                }
            };

            this.checkTie();
        },

        checkTie: function(){
            if(this.turns == 9){
                alert("It's a tie!")
                this.tied++
                this.dashboard();
                this.clearBoard();
            }
        },

        dashboard: function(){
            this.$scoreX.textContent = `X: ${this.scoreX}`;
            this.$scoreO.textContent = `O: ${this.scoreO}`;
            this.$draw.textContent = `D: ${this.tied}`;
        },

        clearBoard: function(){
            this.$cell.forEach(cell => cell.textContent = "");
            this.movesX = [];
            this.movesO = [];
            this.turns = 0;
        },

        resetGame: function(){
            location.reload()
        },
    }

    game.load();
})();
