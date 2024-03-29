#! /usr/bin/env node
// import inquirer.
import inquirer from "inquirer";
// automatic computer randomNumber veriable.
const randomNumber = Math.floor(Math.random() * 4 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 4: ",
    },
]);
// message print congtratulations.
if (answers.userGuessedNumber === randomNumber) {
    console.log("congtratulations! you guessed right number.");
}
// message print rond number.
else {
    console.log("You guessed rong number.");
}
// Muhammad Faheem.
