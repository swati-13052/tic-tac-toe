const VALIDATE_BOARD = (function () {
    let board = BOARD.getBoard();

    let validBoard = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
    ]

    function validate() {
        let obj  = {
            isWinner: false,
            entry: ''
        }
        validBoard.forEach(entry => {
            if (board[entry[0][0]][entry[0][1]] === board[entry[1][0]][entry[1][1]] &&
                board[entry[1][0]][entry[1][1]] === board[entry[2][0]][entry[2][1]] &&
                board[entry[2][0]][entry[2][1]] !== ''
            ) {
                obj.isWinner = true;
                obj.entry = entry;
            }
        });
       return obj;
    }

    return {
        validate
    }
})()