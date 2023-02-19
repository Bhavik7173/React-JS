//function with arguments and with return value
function addition(x,y)
{
    return x+y;
}
console.log("answer : ",addition(10,20));

let x = (a,b) =>
{
    return a+b;   
}
console.log("Addition : ",x(1,2));
let y = (a,b) => a+b;   

console.log("Addition : ",y(1,2));