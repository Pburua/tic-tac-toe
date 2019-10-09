class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.curPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.curPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.curPlayerSymbol;
            if (this.curPlayerSymbol === 'o')
                this.curPlayerSymbol = 'x';
            else this.curPlayerSymbol = 'o';
        }
    }

    isFinished() {
        return !!(this.getWinner() || this.isDraw());
    }

    checkLine(x0, y0, x1, y1) {
        let remSymbol = this.field[y0][x0];

        if(remSymbol === null)
            return null;

        if (x0 === x1 || y0 === y1) {
            for (let i = x0; i <= x1; i++) {
                for (let j = y0; j <= y1; j++) {

                    if (this.field[j][i] !== remSymbol){
                        // console.log('like, really?');
                        return null;
                    }
                }
            }
            return remSymbol;

        } else if (x0 < x1 && y0 < y1) {
            for (let i = x0, j = y0; i <= x1 && j <= y1; i++, j++) {
                if (this.field[j][i] !== remSymbol)
                    return null;
            }
            return remSymbol;

        } else if (x0 < x1 && y0 > y1) {
            for (let i = x0, j = y0; i <= x1 && j >= y1; i++, j--) {
                if (this.field[j][i] !== remSymbol)
                    return null;
            }
            return remSymbol;
        }


    }

    getWinner() {
        let winner;

        // строки

        winner  = this.checkLine(0, 0, 2, 0);
        if(winner !== null){
            // console.log('return1');
            return winner;
        }


        winner  = this.checkLine(0, 1, 2, 1);
        if(winner !== null){
            // console.log('return2');
            return winner;
        }

        winner  = this.checkLine(0, 2, 2, 2);

        if(winner !== null){
            // console.log('return3');
            return winner;
        }

        // столбцы

        winner  = this.checkLine(0, 0, 0, 2);
        if(winner !== null){
            // console.log('return4');
            return winner;
        }

        winner  = this.checkLine(1, 0, 1, 2);
        if(winner !== null){
            // console.log('return5');
            return winner;
        }

        winner  = this.checkLine(2, 0, 2, 2);
        if(winner !== null){
            // console.log('return6');
            return winner;
        }

        // диагонали

        winner  = this.checkLine(0, 0, 2, 2);
        if(winner !== null){
            // console.log('return7');
            return winner;
        }

        winner  = this.checkLine(0, 2, 2, 0);
        if(winner !== null){
            // console.log('return8');
            return winner;
        }

        // console.log('return null');
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.field[i][j] == null)
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
