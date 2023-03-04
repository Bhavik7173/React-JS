function fetchdata() {
    let url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then(res => res.json())
        .then(data => dispData(data))
        .catch(err => console.log(err));
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
    document.getElementById("rst").innerHTML = output
}