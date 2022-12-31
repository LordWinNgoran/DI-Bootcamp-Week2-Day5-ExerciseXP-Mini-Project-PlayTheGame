/****************************Mini Project ***************** */

/**
 * @author: Kouadio Jean Cyrille
 * @description: Play The Game: Explanation of the game  
 * the point of the game is to guess the number that the computer has in “mind”.
 * Date : 30/12/2022
 */





// We have a global variable that takes the number of chances of user


let chances = 3;


/*
    This function playTheGame permit to answer a user to enter a number
    check if the input is a valid number.
    A valid number is a number between 0 and 10 if not answer to enter a new number

*/

function playTheGame() {

    // With the built-in function we answer if the user want play the game
    if (confirm("Would you like to play the game !") == true) {
        let userNumber = prompt("enter a number between 0 and 10 ");
        if (isNaN(userNumber)) {
            alert("Sorry Not a number, Goodbye");
        } else if (userNumber < 0 || userNumber > 10) {
            alert("Sorry it’s not a good number, Goodbye");
        } else {
            //After checks we initialize a variable that receive the value of computer
            let computerNumber = Math.floor(Math.random() * 11);
            //we call the function compareNumbers with two params
            compareNumbers(userNumber, computerNumber);
        }
    } else {
        alert("No problem, Goodbye");
    }
}



/**
 * @description:This function compareNumbers permit to compare the answer of the user and
    the number choose by the computer and if is a winner we exit else we check 
    the rest of chances of user and decrement it
    @param : userNumber: Number
    @param : computerNumber: Number
 */



function compareNumbers(userNumber, computerNumber) {
    if (userNumber == computerNumber) {
        alert("WINNER");
    } else if (userNumber > computerNumber) {
        alert("Your number is bigger then the computer’s, guess again");
    //We substract the chance of user
        chances -= 1;

    // we check if is the last chance if not we continue else exit
        if (chances == 0) {
            alert("out of chances");
        } else {
    //call playTheGame for another chance
            playTheGame();
        }
    } else {
        alert("Your number is smaller then the computer’s, guess again");
        chances -= 1;
     // we check if is the last chance if not we continue else exit
        if (chances == 0) {
            alert("out of chances");
        } else {
    //call playTheGame for another chance
            playTheGame();
        }
    }
}