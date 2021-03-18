const BOARD = (function(){

    const boardContainer = document.getElementById("board");
    let board = [['','',''], ['','',''], ['','','']];

    let firstChance = 'X';

    let turnContainer = document.getElementById('turn');
    turnContainer.innerText = `Turn for ${firstChance}`;

    boardContainer.addEventListener('click', (e) => {
        let id = e.target.id;
        this.setBoard(parseInt(id/10), id%10, firstChance);
        event.target.innerText = `${firstChance}`;
        const validateObj = VALIDATE_BOARD.validate();
        if(validateObj.isWinner) {
            turnContainer.innerText = `Winner is ${firstChance}`;
            validateObj.entry.forEach(e => {
                document.getElementById(`${e[0]}${e[1]}`).classList.add('winner');
            });
            boardContainer.classList.add('disable')
        } else {
            firstChance =  firstChance === 'X' ? 'Y' : 'X';
            turnContainer.innerText = `Turn for ${firstChance}`;
        }
    });

    renderBoard = () => {
        let i,j;
        for(i = 0; i < 3; i++) {
            for(j = 0 ; j < 3; j++) {
                let div = document.createElement('div');
                div.setAttribute('id', `${i}${j}`);
                div.setAttribute('class', 'square');
                boardContainer.appendChild(div);
            }
        }
    }

    getBoard = () => {
        return board;
    }

    setBoard = (row, column, value) => {
       board[row][column] = value;
    }
    
    renderBoard();

    return {
        setBoard,
        getBoard
    }
})()