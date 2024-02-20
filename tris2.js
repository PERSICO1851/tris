// Console per capire [:]
let player = 1;
var board = [["", "", ""], ["", "", ""], ["", "", ""]]; // creazione board vuota 
var xwin = 0; // win x
var ywin = 0; // win y
var dec_win = "X"; // decreta la vittoria
var playercurrent = "X";
function handleButtonClick(buttonId) {
    // Verifica se il testo del pulsante è vuoto
    console.log(buttonId); // id del bottone cliccato
    var row = Math.floor((buttonId - 1) / 3); // se Button id = 3 = 3-1/3 = 0,6 appr.difetto(Math.floor) = 0;
    var col = (buttonId - 1) % 3; // se button id = 3 = 3-1 = 2%3 = Mod(0,667) = 2
    console.log(row, col); // debug
    if (board[row][col] === "") {
        // Assegna "X" o "Y" in base al turno del giocatore
        if ( player%2 == 0 ) {
            board[row][col] = "X";
            playercurrent = "Y";
        } else {
            board[row][col] = "Y";
            playercurrent = "X";
        }
        document.getElementById("turnong").innerHTML = "TURNO: " + playercurrent;    
        dec_win = board[row][col];
        document.getElementById(buttonId).innerHTML = board[row][col]; // prende il bottone tramite id e gli scrive sopra
        // Controlla la vittoria
        if (checkWin(row, col) == true) {
            alert("Il giocatore " + board[row][col] + " ha vinto!");
            clearBoard(); // funzione che pulisce la tabella + array;
            if ( dec_win == "X") {
                xwin++;
            } else {
                ywin++;
            }
            document.getElementById("Total").innerHTML =  "X. "+  xwin + " - " + "Y. " + ywin; // punteggio
        } else {
            player++;
        }
    }
}

function checkWin(row, col) {
    // Verifica la vittoria nella riga, colonna e diagonali
    return (
        checkRow(row) || // controlla le righe
        checkColumn(col) || // controlla le colonne
        checkDiagonals() || // controlla la diagonale 0
        checkAntiDiagonals() // controlla la diagonale 1
    );
}

function checkRow(row) { // Se ogni elem della row data (se row = 0, [0,0]-[0,1]-[0,2] uguali allora return = true)
    return (
        board[row][0] !== "" && 
        board[row][0] === board[row][1] && 
        board[row][1] === board[row][2]
    );
}
function checkColumn(col) {
    return (
        board[0][col] !== "" && 
        board[0][col] === board[1][col] && 
        board[1][col] === board[2][col]
    );
}

function checkDiagonals() {
    return (
        board[0][0] !== "" && 
        board[0][0] === board[1][1] && 
        board[1][1] === board[2][2]
    );
}

function checkAntiDiagonals() {
    return (
        board[0][2] !== "" && 
        board[0][2] === board[1][1] && 
        board[1][1] === board[2][0]
    );
}

function clearButtonText() {
    player = 1; // resetta il player
    clearBoard(); // richiama funz (Pulisce tris)
}

function clearBoard() {
    board = [["", "", ""], ["", "", ""], ["", "", ""]]; // resetta board
    playercurrent = "Y";
    document.getElementById("turnong").innerHTML = "TURNO: " + playercurrent; // resetta plcurr
    var buttons = document.querySelectorAll("#board button");
    buttons.forEach(function(button) {
        button.innerHTML = ""; // tutti i text dei buttons = ""
    });
}
function clearRounds() {
    document.getElementById("Total").innerHTML = " 0 - 0 ";
    xwin = 0;
    ywin = 0; // resetta round
}

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("#board button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            handleButtonClick(button.id); /* chiama handleButtonClick se un bottone viene cliccato rilasciando 
            il suo id;       
            */
        });
    });

    var clearButton = document.getElementById("clearButton"); 
    // se clear button viene cliccato chiama funzione ClearButtonText che pulisce
    if (clearButton) // Javascript verifica se ClearButton esista in DOM(File Html) se si return = true
     {
        clearButton.addEventListener("click", clearButtonText);
    }
    var round_button = document.getElementById("clearRoundButton");
    if (round_button) {
        round_button.addEventListener("click", clearButtonText);
        round_button.addEventListener("click",clearRounds);
    }
});
