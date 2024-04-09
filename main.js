import inquirer from "inquirer";
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 200
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency from convert from  ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency from convert to ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"] // Added choices property
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert "
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//  fromula used 
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//  display data amount
console.log(`the converted amount is that the ${converted_amount.toFixed(3)}`);
