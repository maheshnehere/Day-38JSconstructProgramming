//Write a program that takes a input and determines if the number is a prime.


let input = window.prompt("Enter number to check prime or not :");
n = Number(input);
let count = 0;

for(let i=2 ; i<input ; i++){
    if(input % i == 0){
        count++;
    }
}
if(count == 0){
    console.log(input," is a Prime Number.");
}else{
    console.log(input," is not a Prime Number")
}