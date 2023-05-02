// const prompt = require("prompt-sync")();

let year = window.prompt("Enter year :");

if((year >= 1000 && year % 400 == 0)||
(year >= 100 && year % 4 == 0 && year % 100 != 0)){
    console.log(year," is a Leap year.");
}else{
    console.log(year," is not a Leap year");
}