//without for/of
let arr = [10,20,30,40,50];
for(let x of arr)
{
    console.log(x);
    x = x * 10;
}
for(let x of arr)
{
    console.log(x);
}

let p = 100;
let q = p;
q = 200;
console.log(p);