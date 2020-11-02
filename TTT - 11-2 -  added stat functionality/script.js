var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");

document.getElementById("t1").addEventListener('click', () => move(t1));
document.getElementById("t2").addEventListener('click', () => move(t2));
document.getElementById("t3").addEventListener('click', () => move(t3));
document.getElementById("m1").addEventListener('click', () => move(m1));
document.getElementById("m2").addEventListener('click', () => move(m2));
document.getElementById("m3").addEventListener('click', () => move(m3));
document.getElementById("b1").addEventListener('click', () => move(b1));
document.getElementById("b2").addEventListener('click', () => move(b2));
document.getElementById("b3").addEventListener('click', () => move(b3));

var winCombos = [
    
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
    
];

var squareArray = [
 
    t1, t2, t3, m1, m2, m3, b1, b2, b3,
]

var xMoves = [];
var oMoves = [];

var turn = "X";
var gameCount = 1;
var tiesCount = 1;
var amtMoves = 0;
var timesAsX = 1;
var timesAsO = 1;
var a = 0;

var xWins = 1;
var oWins = 1;



function move(tile) {
        
    if (turn == "X") {
    
        if (tile == t1 && t1.innerHTML == "") {
            tile.innerHTML = turn;
            a = 1;
            amtMoves++;
            xMoves.push(a);
            checkWin(xMoves);
            checkTie();
        }
        if (tile == t2 && t2.innerHTML == "") {
            tile.innerHTML = turn
            a = 2;
            amtMoves++;
            xMoves.push(a);
            checkWin(xMoves);
            checkTie();
        }
        if (tile == t3 && t3.innerHTML == "") {
            tile.innerHTML = turn
            a = 3;
            amtMoves++;
            xMoves.push(a);
            checkWin(xMoves);
            checkTie();
        }
        if (tile == m1 && m1.innerHTML == "") {
            tile.innerHTML = turn
            a = 4;
            amtMoves++;
            xMoves.push(a);
            checkWin(xMoves);
            checkTie();
        }
        if (tile == m2 && m2.innerHTML == "") {
            tile.innerHTML = turn
            a = 5;
            amtMoves++;
            xMoves.push(a);
            checkWin(xMoves);
            checkTie();
        }
        if (tile == m3 && m3.innerHTML == "") {
            tile.innerHTML = turn
            a = 6;
            amtMoves++;
            xMoves.push(a);
            checkWin(xMoves);
            checkTie();
        }
        if (tile == b1 && b1.innerHTML == "") {
            tile.innerHTML = turn
            a = 7;
            amtMoves++;
            xMoves.push(a);
            checkWin(xMoves);
            checkTie();
        }
        if (tile == b2 && b2.innerHTML == ""){
            tile.innerHTML = turn
            a = 8;
            amtMoves++;
            xMoves.push(a);
            checkWin(xMoves);
            checkTie();
        }
        if (tile == b3 && b3.innerHTML == "") {
            tile.innerHTML = turn
            a = 9;
            amtMoves++;
            xMoves.push(a);
            checkWin(xMoves);
            checkTie();
        }

    }
    
    if (turn == "O") {
        
        if (tile == t1 && t1.innerHTML == "") {
            tile.innerHTML = turn
            a = 1;
            amtMoves++;
            oMoves.push(a);
            checkWin(oMoves);
            checkTie();
        }
        if (tile == t2 && t2.innerHTML == "") {
            tile.innerHTML = turn
            a = 2;
            amtMoves++;
            oMoves.push(a);
            checkWin(oMoves);
            checkTie();
        }
        if (tile == t3 && t3.innerHTML == "") {
            tile.innerHTML = turn
            a = 3;
            amtMoves++;
            oMoves.push(a);
            checkWin(oMoves);
            checkTie();
        }
        if (tile == m1 && m1.innerHTML == "") {
            tile.innerHTML = turn
            a = 4;
            amtMoves++;
            oMoves.push(a);
            checkWin(oMoves);
            checkTie();
        }
        if (tile == m2 && m2.innerHTML == "") {
            tile.innerHTML = turn
            a = 5;
            amtMoves++;
            oMoves.push(a);
            checkWin(oMoves);
            checkTie();
        }
        if (tile == m3 && m3.innerHTML == "") {
            tile.innerHTML = turn
            a = 6;
            amtMoves++;
            oMoves.push(a);
            checkWin(oMoves);
            checkTie();
        }
        if (tile == b1 && b1.innerHTML == "") {
            tile.innerHTML = turn
            a = 7;
            amtMoves++;
            oMoves.push(a);
            checkWin(oMoves);
            checkTie();
        }
        if (tile == b2 && b2.innerHTML == "") {
            tile.innerHTML = turn
            a = 8;
            amtMoves++;
            oMoves.push(a);
            checkWin(oMoves);
            checkTie();
        }
        if (tile == b3 && b3.innerHTML == "") {
            tile.innerHTML = turn
            a = 9;
            amtMoves++;
            oMoves.push(a);
            checkWin(oMoves);
            checkTie();
        }
        
    }
    
    changeTurn();
}

function changeTurn() {
    
    if (turn == "O") {
        
        turn = "X";
        
    } else {
        turn = "O";
    } 
    
}

function checkWin(moves) {
    
    var matches = 0;
    
    for(var i=0; i < winCombos.length; i++) {
        for(var j=0; j <winCombos[i].length; j++) {
            if(moves.indexOf(winCombos[i][j]) !== -1) {
                matches++;
                
                if (matches == 3 && moves == xMoves) {
                    document.getElementById("gamesAmt").innerHTML = gameCount++;
                    document.getElementById("xWinsAmt").innerHTML = xWins++;
                    resetBoard();
                
                }
                
                if (matches == 3 && moves == oMoves) {
                    document.getElementById("gamesAmt").innerHTML = gameCount++;
                    document.getElementById("oWinsAmt").innerHTML = oWins++;
                    resetBoard();
                
                }
            }
        }
        
        matches = 0;
    }
    
}

function resetBoard() {
    
    for(var i=0; i<squareArray.length; i++) {
        squareArray[i].innerHTML = "";
    }
    
    xMoves.length = 0;
    oMoves.length = 0;
    amtMoves = 0;
    
}

function checkTie() {
    
    if (amtMoves == 9) {
        document.getElementById("tiesAmt").innerHTML = tiesCount++;
        document.getElementById("gamesAmt").innerHTML = gameCount++;
        resetBoard();
    }
     
}


 

