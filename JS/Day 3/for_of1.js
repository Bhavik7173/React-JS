//without for/of
let arr = [10,20,30,40,50];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    arr[i] = arr[i] * 10;
}
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]); 
}