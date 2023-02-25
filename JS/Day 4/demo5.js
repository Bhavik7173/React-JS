async function main() {
    console.log("Welcome to Main Function")
    await fetchData()
    console.log("Bye From Main Function")
}

async function fetchData() {

    console.log("Welcome to FetchData Function")
    try {
        let url = "https://jsonplaceholder.typicode.com/todos"
        let data = await fetch(url) // return promises and future
        let jsondata = await data.json();
        console.log(jsondata);
    }
    catch (e) {
        console.log("From Catch Block",e);
    } console.log("Bye From Fetchdata Function")
}

main();