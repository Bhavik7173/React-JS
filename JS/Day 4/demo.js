// Promises
function method1()
{
    console.log("Welcome to Method1")
    method2()
    console.log("Bye From Method1")
}
function method2()
{
    console.log("Welcome to Method2")
    method3()
    console.log("Bye From Method2")
}
function method3()
{
    console.log("Welcome to Method3")
    console.log("Bye From Method3")
}
method1()
