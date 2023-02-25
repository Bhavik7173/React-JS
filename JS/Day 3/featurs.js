
//function without return value and arg//
function display()
{
    console.log("It is ok....!");
}
display()
let m = display;//other way to define a function
m();

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//[annonymos1]//function without name return value and arg
let x = function ()
{
    console.log("ok....");
}
x();

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//[arrow function]//
let m1= () =>
{
    console.log("okk>......")
}
m1();
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*{
    //simple arrow function with argumnets//    
    function man(a,b)
    {
        let c= a+b;
        console.log("Addition",c);
    }
    man(10,20);

}*/
//arrow function with argument//
//multiple arguments without return value =>
let c = (a,b) =>
{   
    let z= a+b;
    console.log("Addition =",z);
}
c(10,20);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*function display(x)
{
    console.log("value",x);
}
display(10);
display("GO........!")*/
//function with single argument and without return value
    let a= (x) =>
    {
        console.log("values",x);
    }
    a("man");
    a(10);

    let b = m => //here b = m => ..(function symbol left side a argument)
    {
        console.log("values",m);
    }
    b(10);
    b("Back.......&");

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//function with argumnets and with return values
function dis(x,y)
{
    return x+y;
}
console.log("Addition =",dis(10,20));
//arrow function use 

let n = (x,y) =>
{   
    return x+y;
}
console.log("Additon = ",n(10,30));

//second method 
let k = (a,b) => a+b
console.log("ADDTION =",k(10,20));

//single return value and with argument//
let j = x =>
{
    return x;
}
console.log("Return value =",j(10));
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//[hoisting function]
//let use
x = 10;
console.log("Value",x);//its not working
let x;
//currect way
let x;
x = 10;
console.log("Value",x);//its  working

//var use 
var a;
a=10;
console.log("Vlues",a);


a=10;
console.log("Vlues",a);
var a;

//simple function 
add()
function add()
{
    console.log("kem cho....");
}

//here arrow is not use in hosting
add()
let add = x =>
{
    console.log("Vlaues");
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//[spread operator]//
//[1D array]
let l = [1,2,3,4];
console.log(l);

let s = l[0];
console.log(s);

let l = [1,2,3,4];
let t = [...l];
console.log(t);


//[2D array]
let x = [1,2,3,4,5];
let y = [10,20,30,40,50];
let z = [x,y];

console.log(z);
console.log(z[0]);

console.log(z[0][0]);
console.log(z[0][1]);
console.log(z[0][2]);
console.log(z[0][3]);
console.log(z[0][4]);

console.log(z[1][0]);
console.log(z[1][1]);
console.log(z[1][2]);
console.log(z[1][3]);
console.log(z[1][4]);
//this is a spread operator [...p]//
let q = [...x,...y];
console.log(q);

//spread opreatord only use lasr array in use//
let x = [1,2,3,4,5];
let [i,j,...k] = x;
console.log(i,j);
console.log(k);

#######################################################################################################

//[Es6][ECMA script]//
//var key word//

var x = 10;
console.log("before =",x);
function display()
{
    var x=100;//local variable it is use only function 
    console.log(" X values =",x);
}
display();
console.log("After=",x);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var x = 10;//global variable
console.log("before =",x);
function display()
{   
    x=100;
    //var x=100;
    console.log(" X values =",x);
}
display();
console.log("After=",x);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//here global is not define 
function display()
{
    var x = 10;
    console.log(x);
    //here function is end local variable end
}
display();
console.log("afree",x);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//here if condition true it is ptint 20 and 20
function display()
{
    var x = 10;
    if(true)
    {
        var x = 20;
        console.log(x);
    }
    console.log(x);
}
display();


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//[let key use]

let x = 10;
console.log("before =",x);
function display()
{
    let x=100;//local variable it is use only function 
    console.log(" X values =",x);
}
display();
console.log("After=",x);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let x = 10;//global variable
console.log("before =",x);
function display()
{   
    x=100;
    //var x=100;
    console.log(" X values =",x);
}
display();
console.log("After=",x);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function display()
{
    let x = 10;
    console.log(x);
}
display();
console.log(x);

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//here if condition first run and get 20 and 10
//let in if condition only follow in if condition if condition outside ditroy 
function display()
{
    let x = 10;
    if(true)
    {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}
display();

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//[for_of]key words
let o = [10,20,30,40,50];
for(let i=0;i<o.length;i++)//if you need only use in for loop use a let otherwise var
{
    console.log(o[i]);
}

let o = [10,20,30,40,50];
for(var i=0;i<o.length;i++)//if you need only use in for loop use a let otherwise var
{
    console.log(o[i]);
}

////======short cut forloop========////
let o = [10,20,30,40,50];
for(let a of o)
{
    console.log(a);
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let o = [10,20,30,40,50];
for(var i=0;i<o.length;i++)
{
    console.log(o[i]);
    o[i] = o[i]*10;
}
for(var i=0;i<o.length;i++)
{
    console.log(o[i]);
}
output= 10,20,30,40,50,100,200,300,400,500

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let arr=[10,20,30,40];
for(let x of arr)
{
    console.log(x);
    x = x*10;
}//here not update array here update a [x] 
for(let x of arr)
{
    console.log(x);
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>