//Write a program that takes a command-line argument n and prints a table of the
//powers of 2 that are less than or equal to 2^n.

let n = window.prompt("Enter value of n :");
n = Number(n);

for(let i=1 ; i<=n ; i++){
    let output = Math.pow(2,i);
    console.table("2 power of",i," = ",output);
}