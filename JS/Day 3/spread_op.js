let x = [10,20,30,40,50];
console.log(x);
console.log(x[0]);

let a = x[0];
console.log(a);

let p = [1,2,3,4];
let q = [10,20,30];
let r = [p,q];
console.log(r);
console.log(r[0]);
console.log(r[0][0]);

let w = [...p,...q];
console.log(w);

let [i,j,...k] = p;
console.log(i,j);
console.log(k);