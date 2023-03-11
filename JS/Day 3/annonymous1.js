//function without return value and without args
let x = function ()
{
    console.log("from display ");
}
x();

function add()
{
    console.log("from display ");
    let x = 100;
    return x;
}

x = add()
console.log(x)