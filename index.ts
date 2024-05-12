#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

async function main() {
  let score = 0; // Initialize the score counter

  let question1 = await inquirer.prompt({
    name: "q1",
    message:(chalk.bold.magentaBright(
    "\nQ-01:\tWhich keyword is used to declare a variable with a specific type inTypeScript?\n")),
    type: "list",
    choices: ["var", "let", "const", "type"],
  });

  if (question1.q1 === "let") {
    console.log(chalk.bold.greenBright("\nCorrect Answer..."));
    score++; // Increment score if answer is correct
  } else {
    console.log(chalk.bold.redBright("\nWrong Answer!!!"));
  }

  let question2 = await inquirer.prompt({
    name: "q2",
    message: (chalk.bold.magentaBright("\nQ-02:\tThe author of The Power Of Now is?\n ")),
    type: "list",
    choices: [
      "Charles Dicken",
      "Tara Westover",
      "Don Miguel Ruiz",
      "Eckhart Tolle",
    ],
  });

  if (question2.q2 === "Eckhart Tolle") {
    console.log(chalk.bold.greenBright("\nCorrect Answer..."));
    score++; // Increment score if answer is correct
  } else {
    console.log(chalk.bold.redBright("\nWrong Answer!!!"));
  }

  let question3 = await inquirer.prompt({
    name: "q3",
    message: (chalk.bold.magentaBright("\nQ-03:\tWhat is the chemical equation of water?\n ")),
    type: "list",
    choices: ["H2O", "NaCl", "CO", "CO2"],
  });

  if (question3.q3 === "H2O") {
    console.log(chalk.bold.greenBright("\nCorrect Answer..."));
    score++; // Increment score if answer is correct
  } else {
    console.log(chalk.bold.redBright("\nWrong Answer!!!"));
  }

  let question4 = await inquirer.prompt({
    name: "q4",
    message: (chalk.bold.magentaBright("\nQ-04:\tWhat is the largest ocean on earth?\n")),
    type: "list",
    choices: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
  });

  if (question4.q4 === "Pacific Ocean") {
    console.log(chalk.bold.greenBright("\nCorrect Answer..."));
    score++; // Increment score if answer is correct
  } else {
    console.log(chalk.bold.redBright("\nWrong Answer!!!"));
  }

  let question5 = await inquirer.prompt({
    name: "q5",
    message: (chalk.bold.magentaBright("\nQ-05:\tWho was the first person to step on the Moon?\n")),
    type: "list",
    choices: [
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Neil Armstrong",
      "Michael Collins",
    ],
  });

  if (question5.q5 === "Neil Armstrong") {
    console.log(chalk.bold.greenBright("\nCorrect Answer..."));
    score++; // Increment score if answer is correct
  } else {
    console.log(chalk.bold.redBright("\nWrong Answer!!!"));
  }
  console.log(chalk.bold.blue(`\n\t>>>>> Your score: ${score}/${5} <<<<<`)); // Display the score
}

main();
