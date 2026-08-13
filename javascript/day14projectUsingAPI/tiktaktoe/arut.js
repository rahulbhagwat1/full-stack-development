const div = document.getElementById("tik");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

let array = ['', '', '', '', '', '', '', ''];

// row: 012, 345, 678
// col: 036, 147, 258
// dig: 048, 246

let check = (player) => {

    if (array[0] == player && array[1] == player && array[2] == player) {
        return true;
    }
    else if (array[0] == player && array[3] == player && array[6] == player) {
        return true;
    }
    else if (array[0] == player && array[4] == player && array[8] == player) {
        return true;
    }
    else if (array[3] == player && array[4] == player && array[5] == player) {
        return true;
    }
    else if (array[1] == player && array[4] == player && array[7] == player) {
        return true;
    }
    else if (array[2] == player && array[5] == player && array[8] == player) {
        return true;
    }
    else if (array[2] == player && array[4] == player && array[6] == player) {
        return true;
    }
    else if (array[6] == player && array[7] == player && array[8] == player) {
        return true;
    }
    else {
        return false;
    }
}

let turn = 'X';
let totalInsert = 0;
let winnerDecided = false;

div.addEventListener("click", (event) => {

    if (winnerDecided == true || event.target.textContent != "") {
        return;
    }

    const box = event.target;

    box.textContent = turn;
    array[event.target.id] = turn;
    totalInsert++;

    // Check winner
    if (check(turn)) {
        result.textContent = `Player ${turn} Won the game`;
        winnerDecided = true;
        return;
    }

    // Check draw
    if (totalInsert == 9) {
        result.textContent = "Match Drawn";
        winnerDecided = true;
        return;
    }

    // Change turn
    if (turn == 'X') {
        turn = 'O';
    }
    else {
        turn = 'X';
    }
});

reset.addEventListener("click", () => {

    for (let i = 0; i < 9; i++) {
        array[i] = "";
        document.getElementById(i).textContent = "";
    }

    turn = "X";
    totalInsert = 0;
    winnerDecided = false;
    result.textContent = "";
});