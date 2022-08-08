let Asset = Number(prompt("Enter Asset value"))
let liability = Number(prompt("Enter Liability Value"))
let Num_share = Number(prompt("Enter number of shares"))
let Equity = Asset - liability
console.log("company equity is " + Equity)
let nav = Equity/Num_share
console.log ("navps is " + nav)