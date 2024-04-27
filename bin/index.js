// usr/bin/env node
import inquirer from "inquirer";
let userInput = await inquirer.prompt([
    {
        name: "input",
        type: "input",
        message: "Enter Your Content and check how many character in your content"
    }
]);
let userAnswer = userInput.input.trim();
console.log(userAnswer);
let countCharacters;
let deleteNumber = 0;
let flag = false;
for (let key in userAnswer) {
    if (userAnswer[key] != " ") {
        countCharacters = Number(key);
        // console.log("hello");
    }
    else {
        deleteNumber += 1;
        flag = true;
    }
    if (flag) {
        countCharacters -= deleteNumber;
    }
    // console.log(key);
}
console.log((countCharacters + 1));
