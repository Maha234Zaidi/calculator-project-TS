import inquirer from "inquirer";
import addition from "./addition.js";
import substraction from "./substraction.js";
import multiplication from "./multiplication.js";
import division from "./division.js";
import chalk from "chalk";


async function main(){
    const answer = await inquirer.prompt([{
        type:"number",
        name:"num1",
        message:"Enter your first number here"
    },
    {
        type:"number",
        name:"num2",
        message:"Enter your second number here"
    },
    { 
        type:"list",
        name:"operator",
        message:"Choose any one operator",
        choices:[{
            name:"add",value:addition
        },
        {
            name:"subs",value:substraction   
        },
        {
            name:"mult",value:multiplication
        },
        {
            name:"div",value:division 
        } 
        ]
    }
])
console.log( `${chalk.bold.bgBlue.italic("Your answer is")} ${chalk.bgRed.bold.italic (answer.operator(answer.num1,answer.num2))}`);
}
main();