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
    .then(data => dispData(data))
    .catch(e => console.log(e))

}

function dispData(data) {
    let output = "<table border=3 cellpadding='10px' align='center'>";
    output += "<tr>";
    output += "<th>UserID</th>";
    output += "<th>ID</th>";
    output += "<th>Title</th>";
    output += "<th>Completed</th>";
    
    output += "<th>Edit</th>";
    output += "<th>Delete</th>";
    output += "</tr>";
    for (let i = 0; i < data.length; i++) {
        // userId: 1, id: 1, title: 'delectus aut autem', completed: false
        let element = data[i];
        output += "<tr>";
        output += "<td>" + element['userId'] + "</td>"
        output += "<td>" + element['id'] + "</td>"
        output += "<td>" + element['title'] + "</td>"
        output += "<td>" + element['completed'] + "</td>"
        output += "<td> <a href='#' onclick=updateContact(" + i + ")>Update</a> </td>"
        output += "<td> <a href='#' onclick=deleteContact(" + i + ")>Delete</a> </td>"

        output += "</tr>";
    }
    output += "</table>"
    document.getElementById("display").innerHTML = output
}
main();