const createGameBoard = () => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => {
        return board;
    };

    const markCell = (index, symbol) => {
        if (board[index] === "") {
            board[index] = symbol;
            return true;
        }
        else {
            return false;
        }
    };

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return {
        getBoard, markCell, resetBoard
    };
};
const gameBoard = createGameBoard();


const createPlayer = (name, symbol) => {
    return { name, symbol };
}

const playerA = createPlayer("Player A", "X");
const playerB = createPlayer("Player B", "O");

const createGameController = (gameBoard, playerA, playerB) => {
    const startGame = () => {
        console.log("Game Started!");
        currentPlayer = playerA;
    }

    const makeMove = (index) => {
        if (!isGameOver()) {
            if (gameBoard.markCell(index, currentPlayer.symbol)) {
                currentPlayer = (currentPlayer === playerA) ? playerB : playerA;
                console.log(`Player ${currentPlayer.symbol} made a move.`);

                if (checkWinner()) {
                    console.log(`Player ${currentPlayer.symbol} wins!`);
                    endGame();
                }
                else if (checkDraw()) {
                    console.log("Its a draw");
                    endGame();
                }
            }
            else {
                console.log("Invalid Move");
            }
                       
        }
        else {
            console.log("game over, start a new one");
        }
    }
};

const isGameOver = () => {
    return checkWinner() || checkDraw();
}

const checkWinner = () => {
        
}
