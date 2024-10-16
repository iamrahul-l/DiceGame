function diceRoll() {
    var n = Math.random();
    n = n * 6;
    n = Math.floor(n) + 1;
    return n;
}

function playNow() {

    var Player1Name = document.getElementById("playerName1").value;
    var Player2Name = document.getElementById("playerName2").value;

    if (Player1Name === "" || Player1Name === "") {
        document.getElementById("playerWins").innerHTML = "Please enter both players' names.";
    } else {



        var diceresult1 = diceRoll();
        var diceresult2 = diceRoll();

        diceImage1.setAttribute("src", "diceroll.gif")
        diceImage2.setAttribute("src", "diceroll.gif")

        setTimeout(() => {
            document.getElementById("diceImage1").src = "./assets/dice" + diceresult1 + ".png";
            document.getElementById("diceImage2").src = "./assets/dice" + diceresult2 + ".png";


            if (diceresult1 > diceresult2) {
                document.getElementById("playerWins").innerHTML = Player1Name + " Wins! 🚩";
            } else if (diceresult1 < diceresult2) {
                document.getElementById("playerWins").innerHTML = Player2Name + " Wins! 🚩";
            } else {
                document.getElementById("playerWins").innerHTML = "It's a Tie!";
            }
        }, 2500);

    }
}
document.getElementById('year').textContent = new Date().getFullYear();