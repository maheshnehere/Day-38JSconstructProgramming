//Write a program that takes a command-line argument n and prints the nth harmonic
//number. Harmonic Number is of the form

let n = window.prompt("Enter value of n :");
n = Number(n);
let output = 0;

for(let i=1 ; i<=n ; i++){
     output += (1/i);
}

console.log("Harmonic Number till ",n," term is ",output);