/*
    Insert : POST
    delete : DELETE
    read   : GET
    update : PUT
*/

function fetchdata() {
    let url = "http://localhost:3000/contacts";
    fetch(url)
        .then(res => res.json())
        .then(data => dispData(data))
        .catch(err => console.log(err));
}

function dispData(data) {
    let msg = "<table border=2 cellpadding=5>";
    msg += "<tr>";

    msg += "<th>Id</th>";
    msg += "<th>NAME</th>";
    msg += "<th>CONTACT</th>";
    msg += "<th>EMAIL</th>";

    msg += "</tr>";

    for (let i = 0; i < data.length; i++) {
        let row = data[i];
        msg += "<tr>";

        msg += "<td>" + row.id + "</td>";
        msg += "<td>" + row['name'] + "</td>";
        msg += "<td>" + row.contact + "</td>";
        msg += "<td>" + row.email + "</td>";
        msg += "</tr>";

    }
    msg += "</table>";
    document.getElementById("rst").innerHTML = msg;
}

function insertData() {
    let url = "http://localhost:3000/contacts";

    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let contact = document.getElementById("contact").value
    let email = document.getElementById("email").value

    let temp = { 'id': id, 'name': name, 'contact': contact, 'email': email }

    fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(temp)
    })
        .then(res => console.log(res),fetchdata())
        .catch(err => console.log(err));
}
