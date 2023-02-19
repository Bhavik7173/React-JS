let x = 10;
console.log("before function ",x);
function display()
{
    //let x = 100;
    x = 100;
    console.log("from display ",x);
}
display();
console.log("after function ",x);