//function with single arg and without rtn value
function display(x)
{
    console.log("Value ",x);
}

display(10);
display("welcome");

let x = (z) =>
{
    console.log("Value ",z);   
}
x(10);
x("welcome");

let y = z =>
{
    console.log("Value ",z);   
}
y(10);
y("welcome");