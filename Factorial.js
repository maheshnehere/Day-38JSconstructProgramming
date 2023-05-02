//Write a program that computes a factorial of a number taken as input.

let input = window.prompt("Enter input to check factorial : ");
input = Number(input);
let output = 1;

for(let i=input ; i>0 ; i--){
     output = output * i;
}
console.log("Factorial of input : ",output);