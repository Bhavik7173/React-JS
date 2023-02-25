async function main() {
    console.log("Welcome to Main Function")
    await fetchData()
    console.log("Bye From Main Function")
}

async function fetchData() {

    console.log("Welcome to FetchData Function")

    let url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url) // return promises and future
    .then(res =>res.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))

}

main();