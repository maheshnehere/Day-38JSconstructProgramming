//Write a program that takes day and month from the command line and prints true if
//day of month is between March 20 and June 20, false otherwise.

let month = window.prompt("Enter a Month in numbers:");
let day   = window.prompt("Enter a date :");
month = Number(month);
day = Number(day);

if((month == 3 && day >= 20 && day <= 31)
 ||(month == 4 && day >= 1 && day <= 30)
 ||(month == 5 && day >= 1 && day <= 31)
 ||(month == 6 && day >= 1 && day <= 20)){
    console.log("True");
 }else{
    console.log("false");
 }