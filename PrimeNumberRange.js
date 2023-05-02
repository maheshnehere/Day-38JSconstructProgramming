//Extend the program to take a range of number as input and output the Prime
//Numbers in that range.


let start = window.prompt("Start from ...:");
let end = window.prompt("End...");
start = Number(start);
end = Number(end);


for(let i=start ; i<end ; i++){
    var count = 0;
    for(let j= 2 ; j< i-1 ; j++){
        if(i % j == 0){
            count++
        }
    }
    if(count == 0){
        console.log(i)
    }

}