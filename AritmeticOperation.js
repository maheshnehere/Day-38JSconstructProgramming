// Enter 3 Numbers do following arithmetic operation and find the one that
//is maximum and minimum
//1. a + b * c 3. c + a / b
//2. a % b + c 4. a * b + c


function demo(){
    let a = window.prompt("Enter a: ");
    let b = window.prompt("Enter b: ");
    let c = window.prompt("Enter c: ");

    a = Number(a);
    b = Number(b);
    c = Number(c);

    let output1 = a + b * c ;
    let output2 = c + a / b;
    let output3 = a % b + c ;
    let output4 = a * b + c ;

    console.log("1. a + b * c  = ",output1
    +"\n"+"2. c + a / b = ",output2
    +"\n"+"3. a % b + c = ",output3
    +"\n"+"4. a * b + c = ",output4);

    let maximum = Math.max(output1,output2,output3,output4);
    console.log("Maximum Number : ",maximum);
    let minimun = Math.min(output1,output2,output3,output4);
    console.log("Minimum Number : ",minimun);
}
demo();