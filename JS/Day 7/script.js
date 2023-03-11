let falg = -1


let myContacts = [];
let temp = {};
let url = "http://localhost:3000/contacts";

function fetchdata() {

    fetch(url)
        .then(res => res.json())
        .then(data => {
            myContacts = data;
            dispData(data);
        })
        .catch(err => console.log(err));
}

function insertdata() {
    let btnValue = document.getElementById("insertBtn").value

    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let contact = document.getElementById("contact").value


    temp = { 'id': id, 'name': name, 'contact': contact, 'email': email }

    if (btnValue == "insert Record") {
        insertRecord();
    }
    else {
        //alert("record updated");
        updateRecord();
    }
    document.getElementById("insertBtn").value = "insert Record"

    document.getElementById("id").value = ""
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("contact").value = ""

}
function insertRecord() {
    fetch(url, {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(temp)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            fetchdata();
        })
        .catch(err => console.log(err));
}
function updateRecord() {
    let url1 = url + "/" + temp.id
    //console.log(url);

    fetch(url1, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json",
            'Authorization': ''
        },
        body: JSON.stringify(temp)

    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            fetchdata();
        })
        .catch(err => console.log(err));
}

function dispData(data) {
    let msg = "<table border=2 cellpadding=5>";
    msg += "<tr>";

    msg += "<th>Id</th>";
    msg += "<th>NAME</th>";
    msg += "<th>CONTACT</th>";
    msg += "<th>EMAIL</th>";
    msg += "<th>UPDATE</th>";
    msg += "<th>DELETE</th>";

    msg += "</tr>";

    for (let i = 0; i < data.length; i++) {
        let row = data[i];
        msg += "<tr>";

        msg += "<td>" + row.id + "</td>";
        msg += "<td>" + row['name'] + "</td>";
        msg += "<td>" + row['contact'] + "</td>";
        msg += "<td>" + row['email'] + "</td>";
        msg += "<td><a href='#' onclick=updateData(" + i + ")>Update</a></td>";
        msg += "<td><a href='#' onclick=deleteRecord(" + i + ")>Delete</a></td>";

        msg += "</tr>";

    }
    msg += "</table>";
    document.getElementById("display").innerHTML = msg;
}
function setData(row) {
    document.getElementById("id").value = row.id
    document.getElementById("name").value = row.name
    document.getElementById("email").value = row.email
    document.getElementById("contact").value = row.contact
    // console.log(document.getElementById("insertBtn").value);
    document.getElementById("insertBtn").value = "Update Data"
}
function updateData(index) {
    setData(myContacts[index]);
}
function deleteRecord(index) {
    let url1 = url + "/" + myContacts[index].id
    console.log(url1);

    fetch(url1, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            fetchdata();
        })
        .catch(err => console.log(err));
}