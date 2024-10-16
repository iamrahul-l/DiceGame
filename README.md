# Dice Game

Welcome to the Dice Game project! This is a simple interactive web application where two players can input their names and roll dice to see who wins.

## Project Overview

The Dice Game allows two players to enter their names, roll two dice, and display the winner based on the results. The application features a clean and user-friendly interface.

## Technologies Used

- **HTML**: For the structure of the web application.
- **CSS**: For styling the game interface.
- **JavaScript**: For game logic and interactivity.

-  **How it Works**:
    - Uses `Math.random()` to generate a random number between 0 (inclusive) and 1 (exclusive).
    - Multiplies this number by 6 to scale it to the range of 0 to 6.
    - Applies `Math.floor()` to round down to the nearest whole number, resulting in a number from 0 to 5.
    - Adds 1 to ensure the final result is between 1 and 6, mimicking a real dice roll.

```javascript
function diceRoll() {
    var n = Math.random();
    n = n * 6;
    n = Math.floor(n) + 1;
    return n;
}
```
Executes the game logic when the player clicks the "Play Now!" button.



How it Works:

The game logic is implemented in the `playNow()` function, which executes the following steps when the "Play Now!" button is clicked:

1. **Retrieving Player Names**: 
   - The function retrieves the names of the two players from the input fields using `document.getElementById()`.

2. **Validation**: 
   - It checks if both names are entered; if not, an error message is displayed in the results area.

3. **Dice Roll Generation**: 
   - The `diceRoll()` function is called twice to generate random results for both players.

4. **Loading Animation**: 
   - Initially, the dice images are set to a loading animation (GIF) while the results are calculated.

5. **Delay Before Results**: 
   - The `setTimeout()` function introduces a delay of 2.5 seconds before revealing the final dice results.

6. **Determining Winner**: 
   - The rolled values are compared, and the results area is updated with the winner's name or indicates if there’s a tie.

7. **Content Update**: 
  - It changes the text inside elements using `innerHTML`.

8. **Image Updates**: 
  - The code modifies the `src` attributes of image elements to reflect the results of the dice rolls.

`````function playNow() {
    var Player1Name = document.getElementById("playerName1").value;
    var Player2Name = document.getElementById("playerName2").value;

    if (Player1Name === "" || Player2Name === "") {
        document.getElementById("playerWins").innerHTML = "Please enter both players' names.";
    } else {
        var diceresult1 = diceRoll();
        var diceresult2 = diceRoll();

        diceImage1.setAttribute("src", "diceroll.gif");
        diceImage2.setAttribute("src", "diceroll.gif");

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
`````
