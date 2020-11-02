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

var turn = "X";

function move(tile) {
    
    tile.innerHTML = turn;
    changeTurn();
}

function changeTurn() {
    
    if (turn == "O") {
        
        turn = "X";
        
    } else {
        turn = "O";
    } 
    
}

