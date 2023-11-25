const inquirer = require("inquirer");
const fs = require("fs");
const {Square, Triangle, Circle} = require("./lib/shapes.js");
const fileName = "./examples/logo.svg";

const questions = [
    {
    type: "list",
    name: "shape",
    message: "Please select your desired SVG shape from the list:",
    choices: ["Square", "Triangle", "Circle"],
    },
    {
    type: "input",
    name: "shapeColor",
    message: "Please enter your desired background color for the SVG (if using hexadecimal code include '#' before 6 character code)",
    },
    {
    type: "input",
    name: "text",
    message: "Please enter up to 3 characters (maximum) to be displayed on the SVG",
    },
    {
    type: "input",
    name: "textColor",
    message: "Please enter your desired text-color for the SVG (if using hexadecimal code include '#' before 6 character code)",
    },
]

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        if (answers.text.length > 3) {
            console.log("A maximum of 3 characters is allowed for the logo!");
            init();
        } else {
            createSvg(answers);
        }
    })
    .catch(err => {
        console.log(err, "Invalid input detected!")
    }); 
}

function createSvg(answers) {
    const svg = chosenShape(answers);
    fs.writeFile(fileName, svg, () => console.log("Generated logo.svg!"));
}

function chosenShape(choice) {   
    if (choice.shape === "Square") {
        let shapeChoice = new Square (choice.shapeColor, choice.text, choice.textColor);
        return shapeChoice.render();
    }
    if (choice.shape === "Triangle") {
        let shapeChoice = new Triangle (choice.shapeColor, choice.text, choice.textColor);
        return shapeChoice.render();
    }
    if (choice.shape === "Circle") {
        let shapeChoice = new Circle (choice.shapeColor, choice.text, choice.textColor);
        return shapeChoice.render();
    }
}

init();