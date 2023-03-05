let falg = -1
let contact = [
    { 'name': 'aaa', 'email': 'a@gmail', 'contact': 111 },
    { 'name': 'bbb', 'email': 'b@gmail', 'contact': 222 },
    { 'name': 'ccc', 'email': 'c@gmail', 'contact': 333 },
    { 'name': 'ddd', 'email': 'd@gmail', 'contact': 444 },
    { 'name': 'eee', 'email': 'e@gmail', 'contact': 555 }
];
function getContact() {
    let name = nameElement.value
    let email = emailElement.value
    let phone = contactElement.value

    let temp = []
    temp['name'] = name
    temp['email'] = email
    temp['contact'] = phone
    return temp;
}
function addContact() {

    let temp = getContact();
    if (falg != -1) {
        contact[falg] = temp
        falg = -1
        addButton.value = "Add Contact"
    }
    else {
        contact.push(temp)
    }
    console.log(contact)
    dispData();
    resetField();
}
function dispData() {
    let output = "<table border=3 cellpadding='10px' align='center'>";
    output += "<tr>";
    output += "<th>Name</th>";
    output += "<th>Email</th>";
    output += "<th>Contact</th>";
    output += "<th>Update</th>";
    output += "<th>Delete</th>";
    output += "</tr>";
    for (let i = 0; i < contact.length; i++) {
        output += "<tr>";
        output += "<td>" + contact[i].name + "</td>"
        output += "<td>" + contact[i].email + "</td>"
        output += "<td>" + contact[i].contact + "</td>"
        output += "<td> <a href='#' onclick=updateContact(" + i + ")><i class='material-icons' style='font-size:30px'>edit</i></a> </td>"
        output += "<td> <a href='#' onclick=deleteContact(" + i + ")><i class='material-icons' style='font-size:30px'>delete</i></a> </td>"

        output += "</tr>";
    }
    output += "</table>"
    document.getElementById("display").innerHTML = output
}
function resetField() {
    nameElement.value = ""
    emailElement.value = ""
    contactElement.value = ""
}

function deleteContact(index) {
    let ans = confirm("Do you want to delete this record?")
    if (ans == true) {
        contact.splice(index, 1);
        resetField()
        dispData()
        alert("Delete Record");
    }
    else { }
}

function updateContact(index) {
    falg = index;
    let tempContact = contact[index]
    setContact(tempContact)
}

function serachContact() {
    let flg = 0;
    let name = nameElement.value
    let email = emailElement.value
    let mob = contactElement.value
    for (let i = 0; i < contact.length; i++) {
        if (name == contact[i].name || email == contact[i].email || mob == contact[i].contact) {
            console.log(name + " " + email + " " + mob + " found it.")
            let output = "<table border=3 cellpadding='10px' align='center'>";
            output += "<tr>";
            output += "<th>Name</th>";
            output += "<th>Email</th>";
            output += "<th>Contact</th>";
            output += "<th>Update</th>";
            output += "<th>Delete</th>";
            output += "</tr>";

            output += "<tr>";
            output += "<td>" + contact[i].name + "</td>"
            output += "<td>" + contact[i].email + "</td>"
            output += "<td>" + contact[i].contact + "</td>"
            output += "<td> <a href='#' onclick=updateContact(" + i + ")><i class='material-icons' style='font-size:30px'>edit</i></a> </td>"
            output += "<td> <a href='#' onclick=deleteContact(" + i + ")><i class='material-icons' style='font-size:30px'>delete</i></a> </td>"

            output += "</tr>";

            output += "</table>"
            document.getElementById("display").innerHTML = output
            flg = 1
            
        }

    }
    if (flg == 0) {
        alert("Record is not found!!")
    }
    resetField()
}
function setContact(tempContact) {
    nameElement.value = tempContact['name']
    emailElement.value = tempContact['email']
    contactElement.value = tempContact['contact']

    addButton.value = "Update Contact"
    falg = 1
}