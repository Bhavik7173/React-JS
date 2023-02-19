//function without return value and without args
function display()
{
    console.log("msg from display");
}
display();

//refernce of the function
let x = display;
x();